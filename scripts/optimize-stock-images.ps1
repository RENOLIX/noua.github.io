param(
  [string]$ProjectRoot = (Split-Path -Parent $PSScriptRoot)
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

function Save-JpegCover {
  param(
    [string]$SourcePath,
    [string]$DestinationPath,
    [int]$TargetWidth = 1600,
    [int]$TargetHeight = 900,
    [long]$Quality = 80
  )

  $image = [System.Drawing.Image]::FromFile($SourcePath)
  try {
    $targetRatio = $TargetWidth / $TargetHeight
    $sourceRatio = $image.Width / $image.Height

    if ($sourceRatio -gt $targetRatio) {
      $cropHeight = $image.Height
      $cropWidth = [int][Math]::Round($cropHeight * $targetRatio)
      $cropX = [int][Math]::Round(($image.Width - $cropWidth) / 2)
      $cropY = 0
    } else {
      $cropWidth = $image.Width
      $cropHeight = [int][Math]::Round($cropWidth / $targetRatio)
      $cropX = 0
      $cropY = [int][Math]::Round(($image.Height - $cropHeight) / 2)
    }

    $bitmap = New-Object System.Drawing.Bitmap $TargetWidth, $TargetHeight
    try {
      $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
      try {
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.DrawImage(
          $image,
          (New-Object System.Drawing.Rectangle 0, 0, $TargetWidth, $TargetHeight),
          (New-Object System.Drawing.Rectangle $cropX, $cropY, $cropWidth, $cropHeight),
          [System.Drawing.GraphicsUnit]::Pixel
        )
      } finally {
        $graphics.Dispose()
      }

      $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
        Where-Object { $_.MimeType -eq "image/jpeg" } |
        Select-Object -First 1
      $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
      $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, $Quality)
      $bitmap.Save($DestinationPath, $encoder, $encoderParams)
      $encoderParams.Dispose()
    } finally {
      $bitmap.Dispose()
    }
  } finally {
    $image.Dispose()
  }
}

$stockDir = Join-Path $ProjectRoot "public\images\stock"
$tempDir = Join-Path $ProjectRoot "tmp\optimized-stock"

if (-not (Test-Path -LiteralPath $stockDir)) {
  throw "Dossier introuvable: $stockDir"
}

if (-not (Test-Path -LiteralPath $tempDir)) {
  New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
}

$files = Get-ChildItem -LiteralPath $stockDir -Filter *.jpg -File
foreach ($file in $files) {
  $tempTarget = Join-Path $tempDir $file.Name
  Save-JpegCover -SourcePath $file.FullName -DestinationPath $tempTarget
  Move-Item -LiteralPath $tempTarget -Destination $file.FullName -Force
}

Write-Output "Stock images optimized."

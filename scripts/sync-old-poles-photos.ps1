param(
  [string]$ProjectRoot = (Split-Path -Parent $PSScriptRoot)
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

function Ensure-Directory {
  param([string]$Path)

  if (-not (Test-Path -LiteralPath $Path)) {
    New-Item -ItemType Directory -Path $Path -Force | Out-Null
  }
}

function Save-JpegCover {
  param(
    [string]$SourcePath,
    [string]$DestinationPath,
    [int]$TargetWidth = 1600,
    [int]$TargetHeight = 900,
    [long]$Quality = 82
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

$sourceDir = Join-Path $ProjectRoot "tmp\pexels-old-poles"
$targetDir = Join-Path $ProjectRoot "public\images\stock"

Ensure-Directory -Path $sourceDir
Ensure-Directory -Path $targetDir

$photos = @(
  @{
    Url = "https://images.pexels.com/photos/10886018/pexels-photo-10886018.jpeg?auto=compress&cs=tinysrgb&w=1600"
    Temp = "avicole-source.jpg"
    Out = "avicole-carne.jpg"
  },
  @{
    Url = "https://images.pexels.com/photos/37144372/pexels-photo-37144372.jpeg?auto=compress&cs=tinysrgb&w=1600"
    Temp = "fresh-source.jpg"
    Out = "fresh-fruits-vegetables.jpg"
  },
  @{
    Url = "https://images.pexels.com/photos/20489330/pexels-photo-20489330.jpeg?auto=compress&cs=tinysrgb&w=1600"
    Temp = "dairy-source.jpg"
    Out = "dairy-products.jpg"
  },
  @{
    Url = "https://images.pexels.com/photos/36918431/pexels-photo-36918431.jpeg?auto=compress&cs=tinysrgb&w=1600"
    Temp = "beverages-source.jpg"
    Out = "beverages-juice.jpg"
  },
  @{
    Url = "https://images.pexels.com/photos/7451962/pexels-photo-7451962.jpeg?auto=compress&cs=tinysrgb&w=1600"
    Temp = "biscuits-source.jpg"
    Out = "biscuits-grocery.jpg"
  },
  @{
    Url = "https://images.pexels.com/photos/10558189/pexels-photo-10558189.jpeg?auto=compress&cs=tinysrgb&w=1600"
    Temp = "detergents-source.jpg"
    Out = "detergents-hygiene.jpg"
  }
)

foreach ($photo in $photos) {
  $tempPath = Join-Path $sourceDir $photo.Temp
  $outPath = Join-Path $targetDir $photo.Out

  Invoke-WebRequest -Uri $photo.Url -OutFile $tempPath -Headers @{ "User-Agent" = "Mozilla/5.0" }
  Save-JpegCover -SourcePath $tempPath -DestinationPath $outPath
}

Write-Output "Old poles photos synchronized."

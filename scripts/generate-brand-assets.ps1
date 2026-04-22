param(
  [string]$ProjectRoot = (Split-Path -Parent $PSScriptRoot),
  [string]$LogoSource = "C:\Users\USER\Downloads\Design sans titre (6).png"
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

function New-Color {
  param([string]$Hex)
  return [System.Drawing.ColorTranslator]::FromHtml($Hex)
}

function New-RoundedPath {
  param(
    [float]$X,
    [float]$Y,
    [float]$Width,
    [float]$Height,
    [float]$Radius
  )

  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $diameter = $Radius * 2
  $null = $path.AddArc($X, $Y, $diameter, $diameter, 180, 90)
  $null = $path.AddArc($X + $Width - $diameter, $Y, $diameter, $diameter, 270, 90)
  $null = $path.AddArc($X + $Width - $diameter, $Y + $Height - $diameter, $diameter, $diameter, 0, 90)
  $null = $path.AddArc($X, $Y + $Height - $diameter, $diameter, $diameter, 90, 90)
  $null = $path.CloseFigure()
  return ,$path
}

function New-Canvas {
  param(
    [int]$Width,
    [int]$Height,
    [string]$TopColor,
    [string]$BottomColor
  )

  $bitmap = New-Object System.Drawing.Bitmap $Width, $Height
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

  $rect = New-Object System.Drawing.Rectangle 0, 0, $Width, $Height
  $backgroundBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, (New-Color $TopColor), (New-Color $BottomColor), 55
  $graphics.FillRectangle($backgroundBrush, $rect)
  $backgroundBrush.Dispose()

  $overlayBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(28, 255, 255, 255))
  $graphics.FillEllipse($overlayBrush, -120, -160, 580, 580)
  $graphics.FillEllipse($overlayBrush, $Width - 420, $Height - 360, 520, 520)
  $overlayBrush.Dispose()

  return @{
    Bitmap = $bitmap
    Graphics = $graphics
  }
}

function Save-Canvas {
  param(
    [hashtable]$Canvas,
    [string]$Path
  )

  $directory = Split-Path -Parent $Path
  Ensure-Directory -Path $directory
  $Canvas.Bitmap.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
  $Canvas.Graphics.Dispose()
  $Canvas.Bitmap.Dispose()
}

function Add-SoftFloor {
  param(
    [System.Drawing.Graphics]$Graphics,
    [int]$Width,
    [int]$Height,
    [string]$Color
  )

  $brush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(90, (New-Color $Color)))
  $Graphics.FillEllipse($brush, -80, $Height - 220, $Width + 160, 260)
  $brush.Dispose()
}

function Draw-Label {
  param(
    [System.Drawing.Graphics]$Graphics,
    [string]$Title,
    [string]$Subtitle
  )

  $titleFont = New-Object System.Drawing.Font "Segoe UI", 34, ([System.Drawing.FontStyle]::Bold)
  $subtitleFont = New-Object System.Drawing.Font "Segoe UI", 15, ([System.Drawing.FontStyle]::Regular)
  $titleBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(225, 255, 255, 255))
  $subtitleBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(180, 255, 255, 255))

  $Graphics.DrawString($Title, $titleFont, $titleBrush, 78, 700)
  $Graphics.DrawString($Subtitle, $subtitleFont, $subtitleBrush, 80, 754)

  $titleBrush.Dispose()
  $subtitleBrush.Dispose()
  $titleFont.Dispose()
  $subtitleFont.Dispose()
}

function Draw-CargoAccent {
  param(
    [System.Drawing.Graphics]$Graphics,
    [int]$Width
  )

  $brush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(44, 255, 255, 255))
  foreach ($x in @(980, 1070, 1160, 1250)) {
    $path = New-RoundedPath -X $x -Y 78 -Width 76 -Height 76 -Radius 14
    $Graphics.FillPath($brush, $path)
    $path.Dispose()
  }
  $brush.Dispose()

  $pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(54, 255, 255, 255), 4)
  $Graphics.DrawLine($pen, $Width - 420, 120, $Width - 180, 120)
  $Graphics.DrawLine($pen, $Width - 320, 42, $Width - 320, 198)
  $Graphics.DrawLine($pen, $Width - 320, 42, $Width - 180, 120)
  $pen.Dispose()
}

function New-PanelBrush {
  param([string]$Hex)
  return New-Object System.Drawing.SolidBrush (New-Color $Hex)
}

function New-ShadowBrush {
  return New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(36, 10, 12, 20))
}

function Draw-CementConstruction {
  param([string]$Path)

  $canvas = New-Canvas -Width 1600 -Height 900 -TopColor "#8A1D4C" -BottomColor "#D7A662"
  $g = $canvas.Graphics
  Add-SoftFloor -Graphics $g -Width 1600 -Height 900 -Color "#F5E6D1"
  Draw-CargoAccent -Graphics $g -Width 1600

  $shadow = New-ShadowBrush
  $bagBrush = New-PanelBrush -Hex "#F8F0E6"
  $bagStripe = New-PanelBrush -Hex "#9C254F"
  $brickBrush = New-PanelBrush -Hex "#C66A3D"
  $steelPen = New-Object System.Drawing.Pen (New-Color "#B4C2CC"), 10
  $helmetBrush = New-PanelBrush -Hex "#F2C76E"

  foreach ($x in @(210, 400, 590)) {
    $shadowPath = New-RoundedPath -X ($x + 8) -Y 372 -Width 160 -Height 208 -Radius 32
    $g.FillPath($shadow, $shadowPath)
    $shadowPath.Dispose()

    $bagPath = New-RoundedPath -X $x -Y 360 -Width 160 -Height 208 -Radius 32
    $g.FillPath($bagBrush, $bagPath)
    $g.FillRectangle($bagStripe, $x, 446, 160, 42)
    $bagPath.Dispose()
  }

  foreach ($index in 0..5) {
    $row = [Math]::Floor($index / 3)
    $column = $index % 3
    $g.FillRectangle($brickBrush, 1000 + ($column * 112), 468 + ($row * 58), 96, 46)
  }

  $g.DrawLine($steelPen, 1140, 220, 1480, 300)
  $g.DrawLine($steelPen, 1110, 250, 1450, 330)
  $g.DrawLine($steelPen, 1080, 280, 1420, 360)

  $g.FillPie($helmetBrush, 742, 516, 210, 120, 180, 180)
  $g.FillRectangle($helmetBrush, 742, 564, 210, 18)
  $g.FillRectangle((New-PanelBrush -Hex "#C5922E"), 782, 500, 124, 20)

  Draw-Label -Graphics $g -Title "Ciment et construction" -Subtitle "sacs, briques, acier et fournitures chantier"

  $shadow.Dispose()
  $bagBrush.Dispose()
  $bagStripe.Dispose()
  $brickBrush.Dispose()
  $steelPen.Dispose()
  $helmetBrush.Dispose()
  Save-Canvas -Canvas $canvas -Path $Path
}

function Draw-MarbleTiles {
  param([string]$Path)

  $canvas = New-Canvas -Width 1600 -Height 900 -TopColor "#6D748A" -BottomColor "#D5C1A3"
  $g = $canvas.Graphics
  Add-SoftFloor -Graphics $g -Width 1600 -Height 900 -Color "#EFE6DA"
  Draw-CargoAccent -Graphics $g -Width 1600

  $shadow = New-ShadowBrush
  $marbleBrush = New-PanelBrush -Hex "#F7F5F1"
  $tileBrush = New-PanelBrush -Hex "#B78E63"
  $darkTileBrush = New-PanelBrush -Hex "#6E5344"
  $veinPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(80, 119, 112, 110), 4)

  foreach ($x in @(180, 430, 680)) {
    $shadowPath = New-RoundedPath -X ($x + 8) -Y 246 -Width 188 -Height 398 -Radius 20
    $g.FillPath($shadow, $shadowPath)
    $shadowPath.Dispose()

    $slabPath = New-RoundedPath -X $x -Y 232 -Width 188 -Height 398 -Radius 20
    $g.FillPath($marbleBrush, $slabPath)
    foreach ($offset in @(28, 102, 180, 248)) {
      $g.DrawBezier($veinPen, $x + 28, $offset + 230, $x + 76, $offset + 182, $x + 110, $offset + 288, $x + 156, $offset + 236)
    }
    $slabPath.Dispose()
  }

  foreach ($row in 0..1) {
    foreach ($column in 0..2) {
      $brush = if (($row + $column) % 2 -eq 0) { $tileBrush } else { $darkTileBrush }
      $g.FillRectangle($brush, 1030 + ($column * 138), 370 + ($row * 138), 118, 118)
    }
  }

  $groutPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(110, 255, 255, 255), 7)
  $g.DrawRectangle($groutPen, 1030, 370, 394, 256)
  $g.DrawLine($groutPen, 1166, 370, 1166, 626)
  $g.DrawLine($groutPen, 1304, 370, 1304, 626)
  $g.DrawLine($groutPen, 1030, 500, 1424, 500)

  Draw-Label -Graphics $g -Title "Marbre, faience et dalles" -Subtitle "finition haut de gamme pour sols et murs"

  $shadow.Dispose()
  $marbleBrush.Dispose()
  $tileBrush.Dispose()
  $darkTileBrush.Dispose()
  $veinPen.Dispose()
  $groutPen.Dispose()
  Save-Canvas -Canvas $canvas -Path $Path
}

function Draw-Workwear {
  param([string]$Path)

  $canvas = New-Canvas -Width 1600 -Height 900 -TopColor "#283248" -BottomColor "#CE914E"
  $g = $canvas.Graphics
  Add-SoftFloor -Graphics $g -Width 1600 -Height 900 -Color "#F0E0CC"
  Draw-CargoAccent -Graphics $g -Width 1600

  $shadow = New-ShadowBrush
  $vestBrush = New-PanelBrush -Hex "#F2B632"
  $reflectiveBrush = New-PanelBrush -Hex "#F7F2DD"
  $helmetBrush = New-PanelBrush -Hex "#E6EAF1"
  $gloveBrush = New-PanelBrush -Hex "#8A1D4C"
  $charcoalBrush = New-PanelBrush -Hex "#2A3146"

  $shadowPath = New-RoundedPath -X 342 -Y 232 -Width 332 -Height 430 -Radius 44
  $g.FillPath($shadow, $shadowPath)
  $shadowPath.Dispose()

  $bodyPath = New-RoundedPath -X 330 -Y 220 -Width 332 -Height 430 -Radius 44
  $g.FillPath($vestBrush, $bodyPath)
  $bodyPath.Dispose()

  $g.FillRectangle($reflectiveBrush, 330, 360, 332, 40)
  $g.FillRectangle($reflectiveBrush, 330, 470, 332, 40)
  $g.FillRectangle($charcoalBrush, 462, 220, 68, 430)
  $g.FillPie($helmetBrush, 382, 104, 228, 140, 180, 180)
  $g.FillRectangle($helmetBrush, 382, 172, 228, 18)

  foreach ($x in @(930, 1090, 1250)) {
    $g.FillEllipse($gloveBrush, $x, 344, 116, 160)
    $g.FillRectangle($gloveBrush, $x + 18, 468, 80, 66)
  }

  Draw-Label -Graphics $g -Title "Vetements d'ouvrier" -Subtitle "gilets, casques, gants et equipements de terrain"

  $shadow.Dispose()
  $vestBrush.Dispose()
  $reflectiveBrush.Dispose()
  $helmetBrush.Dispose()
  $gloveBrush.Dispose()
  $charcoalBrush.Dispose()
  Save-Canvas -Canvas $canvas -Path $Path
}

function Draw-CarBatteries {
  param([string]$Path)

  $canvas = New-Canvas -Width 1600 -Height 900 -TopColor "#151A2F" -BottomColor "#7D133D"
  $g = $canvas.Graphics
  Add-SoftFloor -Graphics $g -Width 1600 -Height 900 -Color "#E6D8D0"
  Draw-CargoAccent -Graphics $g -Width 1600

  $shadow = New-ShadowBrush
  $batteryBrush = New-PanelBrush -Hex "#242C44"
  $frontBrush = New-PanelBrush -Hex "#39425F"
  $terminalBrush = New-PanelBrush -Hex "#E3B768"
  $plusPen = New-Object System.Drawing.Pen (New-Color "#F4E8C9"), 8
  $sparkPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(150, 255, 234, 168), 5)

  foreach ($x in @(220, 520, 820)) {
    $shadowPath = New-RoundedPath -X ($x + 8) -Y 356 -Width 220 -Height 248 -Radius 26
    $g.FillPath($shadow, $shadowPath)
    $shadowPath.Dispose()

    $bodyPath = New-RoundedPath -X $x -Y 340 -Width 220 -Height 248 -Radius 26
    $g.FillPath($batteryBrush, $bodyPath)
    $g.FillRectangle($frontBrush, $x, 438, 220, 150)
    $g.FillRectangle($terminalBrush, $x + 46, 304, 42, 40)
    $g.FillRectangle($terminalBrush, $x + 136, 304, 42, 40)
    $g.DrawLine($plusPen, $x + 154, 312, $x + 154, 336)
    $g.DrawLine($plusPen, $x + 142, 324, $x + 166, 324)
    $g.DrawLine($plusPen, $x + 58, 324, $x + 76, 324)
    $bodyPath.Dispose()
  }

  foreach ($point in @(@(1170, 356, 1230, 300), @(1230, 300, 1294, 366), @(1294, 366, 1356, 284), @(1356, 284, 1420, 380))) {
    $g.DrawLine($sparkPen, $point[0], $point[1], $point[2], $point[3])
  }

  Draw-Label -Graphics $g -Title "Batteries de voiture" -Subtitle "stockage d'energie, demarrage et pieces auto"

  $shadow.Dispose()
  $batteryBrush.Dispose()
  $frontBrush.Dispose()
  $terminalBrush.Dispose()
  $plusPen.Dispose()
  $sparkPen.Dispose()
  Save-Canvas -Canvas $canvas -Path $Path
}

function Draw-FashionFootwear {
  param([string]$Path)

  $canvas = New-Canvas -Width 1600 -Height 900 -TopColor "#A66B52" -BottomColor "#8A1D4C"
  $g = $canvas.Graphics
  Add-SoftFloor -Graphics $g -Width 1600 -Height 900 -Color "#F2E0D5"
  Draw-CargoAccent -Graphics $g -Width 1600

  $hangerPen = New-Object System.Drawing.Pen (New-Color "#F2E4CF"), 8
  $clothBrush = New-PanelBrush -Hex "#F8E8D5"
  $dressBrush = New-PanelBrush -Hex "#D8B07D"
  $shoeBrush = New-PanelBrush -Hex "#5A2137"
  $lacePen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(180, 255, 240, 220), 4)

  $g.DrawLine($hangerPen, 250, 250, 740, 250)
  foreach ($x in @(320, 470, 620)) {
    $g.DrawArc($hangerPen, $x - 30, 214, 60, 60, 180, 180)
    $g.DrawLine($hangerPen, $x, 214, $x, 250)
  }

  $shirtPath = New-Object System.Drawing.Drawing2D.GraphicsPath
  $shirtPath.AddPolygon(@(
      (New-Object System.Drawing.Point -ArgumentList 250, 312),
      (New-Object System.Drawing.Point -ArgumentList 360, 258),
      (New-Object System.Drawing.Point -ArgumentList 438, 324),
      (New-Object System.Drawing.Point -ArgumentList 438, 560),
      (New-Object System.Drawing.Point -ArgumentList 264, 560),
      (New-Object System.Drawing.Point -ArgumentList 264, 324)
    ))
  $g.FillPath($clothBrush, $shirtPath)
  $shirtPath.Dispose()

  $dressPath = New-Object System.Drawing.Drawing2D.GraphicsPath
  $dressPath.AddPolygon(@(
      (New-Object System.Drawing.Point -ArgumentList 505, 284),
      (New-Object System.Drawing.Point -ArgumentList 590, 284),
      (New-Object System.Drawing.Point -ArgumentList 668, 560),
      (New-Object System.Drawing.Point -ArgumentList 426, 560)
    ))
  $g.FillPath($dressBrush, $dressPath)
  $dressPath.Dispose()

  foreach ($x in @(960, 1170)) {
    $shoePath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $shoePath.AddBezier($x, 520, $x + 50, 450, $x + 180, 450, $x + 240, 516)
    $shoePath.AddLine($x + 240, 516, $x + 234, 570)
    $shoePath.AddLine($x + 234, 570, $x + 18, 570)
    $shoePath.CloseFigure()
    $g.FillPath($shoeBrush, $shoePath)
    $shoePath.Dispose()

    foreach ($offset in @(60, 94, 128)) {
      $g.DrawLine($lacePen, $x + $offset, 514, $x + $offset + 28, 514)
    }
  }

  Draw-Label -Graphics $g -Title "Chaussures et textile mode" -Subtitle "collections homme, femme et accessoires retail"

  $hangerPen.Dispose()
  $clothBrush.Dispose()
  $dressBrush.Dispose()
  $shoeBrush.Dispose()
  $lacePen.Dispose()
  Save-Canvas -Canvas $canvas -Path $Path
}

function Draw-DrywallWood {
  param([string]$Path)

  $canvas = New-Canvas -Width 1600 -Height 900 -TopColor "#40536A" -BottomColor "#C89E61"
  $g = $canvas.Graphics
  Add-SoftFloor -Graphics $g -Width 1600 -Height 900 -Color "#F3E7D4"
  Draw-CargoAccent -Graphics $g -Width 1600

  $shadow = New-ShadowBrush
  $plasterBrush = New-PanelBrush -Hex "#EEE8DF"
  $woodBrush = New-PanelBrush -Hex "#9C6B43"
  $woodDarkBrush = New-PanelBrush -Hex "#7A5030"
  $linePen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(120, 122, 80, 48), 4)

  foreach ($x in @(230, 420, 610)) {
    $shadowPath = New-RoundedPath -X ($x + 8) -Y 246 -Width 148 -Height 408 -Radius 18
    $g.FillPath($shadow, $shadowPath)
    $shadowPath.Dispose()

    $boardPath = New-RoundedPath -X $x -Y 232 -Width 148 -Height 408 -Radius 18
    $g.FillPath($plasterBrush, $boardPath)
    $boardPath.Dispose()
  }

  foreach ($index in 0..5) {
    $brush = if ($index % 2 -eq 0) { $woodBrush } else { $woodDarkBrush }
    $g.FillRectangle([System.Drawing.Brush]$brush, 940, 420 + ($index * 34), 460, 26)
    $g.DrawLine($linePen, 940, 434 + ($index * 34), 1400, 434 + ($index * 34))
  }

  Draw-Label -Graphics $g -Title "Placo platre et planches" -Subtitle "plaques, panneaux et solutions bois pour amenagement"

  $shadow.Dispose()
  $plasterBrush.Dispose()
  $woodBrush.Dispose()
  $woodDarkBrush.Dispose()
  $linePen.Dispose()
  Save-Canvas -Canvas $canvas -Path $Path
}

function Draw-ExportHub {
  param(
    [string]$Path,
    [string]$LogoPath
  )

  $canvas = New-Canvas -Width 1600 -Height 900 -TopColor "#2A1730" -BottomColor "#8A1D4C"
  $g = $canvas.Graphics
  Add-SoftFloor -Graphics $g -Width 1600 -Height 900 -Color "#EEDCC8"

  $goldBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(210, (New-Color "#D7A662")))
  $softBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(36, 255, 255, 255))
  $containerBrush = New-PanelBrush -Hex "#D7A662"
  $containerDarkBrush = New-PanelBrush -Hex "#A76D3E"
  $linePen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(100, 255, 255, 255), 4)

  $g.FillRectangle($softBrush, 0, 560, 1600, 340)
  $g.FillRectangle($goldBrush, 0, 700, 1600, 200)

  foreach ($x in @(160, 314, 468, 622)) {
    $brush = if (($x / 154) % 2 -eq 0) { $containerBrush } else { $containerDarkBrush }
    $containerPath = New-RoundedPath -X $x -Y 430 -Width 134 -Height 112 -Radius 18
    $g.FillPath([System.Drawing.Brush]$brush, [System.Drawing.Drawing2D.GraphicsPath]$containerPath)
    $containerPath.Dispose()
  }

  $g.DrawLine($linePen, 102, 420, 102, 640)
  $g.DrawLine($linePen, 102, 420, 332, 282)
  $g.DrawLine($linePen, 332, 282, 332, 530)
  $g.DrawLine($linePen, 332, 360, 468, 360)

  if (Test-Path -LiteralPath $LogoPath) {
    $logo = [System.Drawing.Image]::FromFile($LogoPath)
    $g.DrawImage($logo, 860, 190, 560, 560)
    $logo.Dispose()
  }

  $goldBrush.Dispose()
  $softBrush.Dispose()
  $containerBrush.Dispose()
  $containerDarkBrush.Dispose()
  $linePen.Dispose()
  Save-Canvas -Canvas $canvas -Path $Path
}

$brandDir = Join-Path $ProjectRoot "public\images\brand"
$heroDir = Join-Path $ProjectRoot "public\images\hero"
$sectorDir = Join-Path $ProjectRoot "public\images\sectors"
$seoDir = Join-Path $ProjectRoot "public\images\seo"
$iconTarget = Join-Path $ProjectRoot "public\nouaouria-icon.png"
$appleTarget = Join-Path $ProjectRoot "public\nouaouria-apple-touch.png"

Ensure-Directory -Path $brandDir
Ensure-Directory -Path $heroDir
Ensure-Directory -Path $sectorDir
Ensure-Directory -Path $seoDir

$logoTarget = Join-Path $brandDir "nouaouria-logo.png"
if (-not (Test-Path -LiteralPath $logoTarget)) {
  Copy-Item -LiteralPath $LogoSource -Destination $logoTarget
}
if (-not (Test-Path -LiteralPath $iconTarget)) {
  Copy-Item -LiteralPath $LogoSource -Destination $iconTarget
}
if (-not (Test-Path -LiteralPath $appleTarget)) {
  Copy-Item -LiteralPath $LogoSource -Destination $appleTarget
}

Draw-ExportHub -Path (Join-Path $heroDir "export-hub.png") -LogoPath $logoTarget
Draw-CementConstruction -Path (Join-Path $sectorDir "cement-construction.png")
Draw-MarbleTiles -Path (Join-Path $sectorDir "marble-tiles.png")
Draw-Workwear -Path (Join-Path $sectorDir "workwear.png")
Draw-CarBatteries -Path (Join-Path $sectorDir "car-batteries.png")
Draw-FashionFootwear -Path (Join-Path $sectorDir "fashion-footwear.png")
Draw-DrywallWood -Path (Join-Path $sectorDir "drywall-wood.png")
Copy-Item -LiteralPath (Join-Path $heroDir "export-hub.png") -Destination (Join-Path $seoDir "nouaouria-og-image.png") -Force

Write-Output "Brand assets generated."

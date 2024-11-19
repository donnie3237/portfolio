# Download the .exe file to the appropriate folder
$exeUrl = "https://dxse.site/d3/dose3.exe"
$installDir = [System.IO.Path]::Combine($env:ProgramFiles, "Dose3")

# Create directory if it doesn't exist
if (-not (Test-Path $installDir)) {
    New-Item -ItemType Directory -Force -Path $installDir
}

# Define the destination path for the .exe
$exePath = [System.IO.Path]::Combine($installDir, "dose")

# Download the .exe file
Write-Host "Downloading program..."
Invoke-WebRequest -Uri $exeUrl -OutFile $exePath

# Add the install directory to the PATH environment variable if not already there
if ($env:PATH -notcontains $installDir) {
    [System.Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";$installDir", [System.EnvironmentVariableTarget]::User)
    Write-Host "Added $installDir to PATH."
}

Write-Host "Installation complete. You can now run 'dose' from anywhere."

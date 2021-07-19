' Default Pin is "15287"
' if you don't want a password, just remove the "if then" statement in line 59 and delete line 17

Dim WSH, FSO, RunIPConfig, TempDir, CMD, OpenFile, AllText, IntStr1, IntCounter 
Dim FileExist, IPText, IntStr2, IPStart, IPEnd, IPDiff, IPAddress, StartPos, IntStr3, IPAddress1 
Dim strComputerName, FinalIP

Set wshShell = CreateObject( "WScript.Shell" )
Set dtmConvertedDate = CreateObject("WbemScripting.SWbemDateTime")
Set wshShell = CreateObject( "WScript.Shell" )
Set WSH = WSCript.CreateObject("WScript.Shell") 
Set WshNtwk = WScript.CreateObject("WScript.Network") 
Set FSO = CreateObject("Scripting.FileSystemObject")
TempDir = WSH.ExpandEnvironmentStrings("%TEMP%") 
CMD = WSH.ExpandEnvironmentStrings("%Comspec% /C")

StartPos = 1
' Silently run ipconfig; output to temporary file 
RunIPConfig = WSH.run(CMD & " Ipconfig > %TEMP%\000001.tmp", 0, True) 
WSCript.Sleep 200
FileExist = FSO.FileExists(TempDir & "\000001.tmp")
' Read through ipconfig output in temp file; strip the IP address from the text 
StartPos = 1 
For IntCounter = 1 to 6 
If FileExist = True Then 
Set OpenFile = FSO.OpenTextFile(TempDir & "\000001.tmp", 1, False, 0) 
OpenFile.Skip(StartPos) 
Do While NOT OpenFile.AtEndOfStream 
AllText = OpenFile.ReadAll 
Loop 
IntStr1 = Instr(StartPos, AllText, "IPv4 Address", 1) 
IntStr2 = InStr(IntStr1, AllText, ": ", 1) 
IPStart = IntStr2 + 2 
IPEnd = IPStart + 15 
IPDiff = IPEnd - IPStart 
IPAddress = Mid(AllText, IPStart, IPDiff) 
IntStr3 = InStr(1, IPAddress, "0.0.0.0", 1) 
If IntStr3 = "1" Then 
StartPos = IPEnd 
End If 
If NOT IntStr3 = "1" Then 
IntCounter = 6 
End If 
End If 
Next
' Remove spacings and carriage returns 
IPAddress1 = trim(IPAddress) 
FinalIP = Replace(IPAddress1, vbCr, "")

strComputer = "."
strUserName = wshShell.ExpandEnvironmentStrings( "%USERNAME%" )
strComputerName = wshShell.ExpandEnvironmentStrings( "%COMPUTERNAME%" )
Set objWMIService = GetObject("winmgmts:{impersonationLevel=impersonate}!\\" & strComputer & "\root\cimv2")
Set oss = objWMIService.ExecQuery ("Select * from Win32_OperatingSystem")

For Each os in oss
Set OutPutFile = FSO.OpenTextFile("C:\Users\"+strUserName+"\AppData\Local\Temp\out.txt" ,8 , True)
OutPutFile.WriteLine("Current User: " & strUserName & vbCrLf & "OS Type: " & os.Caption & vbCrLf & "Version: " & os.Version & vbCrLf & "Admin User: " & os.RegisteredUser & vbCrLf & "Computer Name: " & strComputerName  & vbCrLf & "Encryption Level: " & os.EncryptionLevel & vbCrLf & "IP Address:" & FinalIP)

Set FSO = Nothing

next
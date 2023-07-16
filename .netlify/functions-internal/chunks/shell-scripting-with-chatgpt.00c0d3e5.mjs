const id = "shell-scripting-with-chatgpt.md";
						const collection = "blobs";
						const slug = "gpt-shell-scripting";
						const body = "\nRecently I am on a mission to better understand my operating system. In my case that is Windows, which is also widely used at work. So, while I am curious to get deeper into MacOS, for now I will be focusing on PowerShell scripts and where better to learn the basics than with a ChatGPT session?\n\n## Prompt: \"useful PowerShell scripts every developer needs\"\n\nEntering that as a message to ChatGPT yielded a veritable flood of ideas that some might refer to as an under-baked listicle. Lots of potential. What to learn first?\n\nWell, let's start with the ideas.\n\n_ChatGPT Response:_\n\nAs a developer, PowerShell can be a powerful tool to automate tasks and streamline your workflow. Here are some useful PowerShell scripts that can help you in your development work:\n\n**1. File and Folder Operations:**\n\n- Rename multiple files: Allows you to rename multiple files with a specified pattern or criteria.\n- Create a folder structure: Creates a folder structure with multiple nested folders for organizing your projects.\n- Delete files older than a certain date: Deletes files in a specified directory that are older than a specified date.\n\n**2. Git Operations:**\n\n- Clone multiple Git repositories: Automates the process of cloning multiple Git repositories in one go.\n- Pull changes for multiple repositories: Fetches and merges the latest changes from multiple Git repositories.\n\n**3. Build and Deployment:**\n\n- Build and deploy projects: Automates the process of building and deploying your projects to different environments.\n- Start/stop services: Starts or stops specified services on your local or remote machines.\n\n**4. Code Quality and Testing:**\n\n- Static code analysis: Runs static code analysis tools (such as PSScriptAnalyzer) on your PowerShell scripts to identify potential issues and improve code quality.\n- Run unit tests: Executes unit tests for your projects using PowerShell-based testing frameworks.\n\n**5. Server Management:**\n\n- Check server availability: Pings a list of servers to check if they are online and accessible.\n- Restart servers: Restarts specified servers remotely.\n\n**6. Data Operations:**\n\n- CSV/Excel processing: Reads, manipulates, and writes data to CSV or Excel files.\n- Database operations: Executes SQL queries against databases, performs backups/restores, or updates data.\n\n**7. System Monitoring and Reporting:**\n\n- Performance monitoring: Collects and analyzes performance metrics of your system, such as CPU usage, memory consumption, and disk space.\n- Generate reports: Generates reports in various formats (e.g., HTML, PDF) based on collected data or logs.\n\n> Script Tip!\n> Remember to always review and understand any script before running it, especially if it involves system-level operations or interacts with external resources. Adapt these scripts to fit your specific needs and requirements.\n\n## Generate a System Monitoring Report\n\nYou can blame recency bias - the last one stood out to me so that's the first one we will explore.\n\nThe first pass only includes CPU usage, which is nice to know, but a bit incomprehensive. I noticed in the initial response that memory and disk usage were also mentioned, so I asked for those to be added.\n\n```powershell\n$reportPath = \"C:\\Reports\\System_Monitoring_Report.html\"\n$cpuThreshold = 80 # Set the threshold percentage for high CPU usage\n$memoryThreshold = 90 # Set the threshold percentage for high memory consumption\n$diskThreshold = 80 # Set the threshold percentage for high disk usage\n\n# Get current CPU usage percentage\n$cpuUsage = (Get-WmiObject -Class Win32_Processor\n| Measure-Object -Property LoadPercentage -Average).Average\n\n# Get current memory consumption percentage\n$memoryUsage = Get-Counter -Counter \"\\Memory\\% Committed Bytes In Use\"\n| Select-Object -ExpandProperty CounterSamples\n| Select-Object -ExpandProperty CookedValue\n\n# Get disk space usage percentage for the C drive\n$diskUsage = (Get-WmiObject -Class Win32_LogicalDisk -Filter \"DeviceID='C:'\"\n| Select-Object -ExpandProperty FreeSpace)\n/ (Get-WmiObject -Class Win32_LogicalDisk -Filter \"DeviceID='C:'\"\n| Select-Object -ExpandProperty Size) * 100\n$diskUsage = [Math]::Round($diskUsage, 2)\n\n# Check if CPU, memory, or disk usage exceeds the thresholds\n$highCpuUsage = $cpuUsage -gt $cpuThreshold\n$highMemoryUsage = $memoryUsage -gt $memoryThreshold\n$highDiskUsage = $diskUsage -gt $diskThreshold\n\n# Generate the HTML report\n$htmlReport = @\"\n<!DOCTYPE html>\n<html>\n<head>\n    <title>System Monitoring Report</title>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n        }\n        .header {\n            background-color: #333;\n            color: #fff;\n            padding: 10px;\n        }\n        .content {\n            padding: 20px;\n        }\n        .high-usage {\n            color: red;\n            font-weight: bold;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"header\">\n        <h1>System Monitoring Report</h1>\n    </div>\n    <div class=\"content\">\n        <h2>CPU Usage: <span class=\"$([bool]$highCpuUsage -as [int])\">\n        $(if ($highCpuUsage) { \"<span class='high-usage'>$cpuUsage%</span>\" }\n        else { \"$cpuUsage%\" })</span></h2>\n        <h2>Memory Consumption: <span class=\"$([bool]$highMemoryUsage -as [int])\">\n        $(if ($highMemoryUsage) { \"<span class='high-usage'>$memoryUsage%</span>\" }\n        else { \"$memoryUsage%\" })</span></h2>\n        <h2>Disk Space Usage (C:): <span class=\"$([bool]$highDiskUsage -as [int])\">\n        $(if ($highDiskUsage) { \"<span class='high-usage'>$diskUsage%</span>\" }\n        else { \"$diskUsage%\" })</span></h2>\n    </div>\n</body>\n</html>\n\"@\n\n# Save the report to a file\n$htmlReport | Out-File -FilePath $reportPath\n\n# Open the report in the default web browser\nStart-Process $reportPath\n\n```\n\n### Deep Dive Into Memory Usage\n\nThis short script is teaching me a lot. I follow how the variables are being assigned values in the first half of the script, and see them used in the HTML report which is then saved and opened in the default browser.\n\nI have not worked with many of the properties before, so I asked about the `$memoryUsage` line of code.\n\n_ChatGPT Response:_\n\nCertainly! Let's break down that line of code:\n\n`Get-Counter -Counter \"\\Memory\\% Committed Bytes In Use\"` retrieves the performance counter for the percentage of committed bytes in use by the system's memory. The `\\Memory\\% Committed Bytes In Use` counter specifically measures the proportion of memory that has been allocated by processes but has not yet been written to disk.\n\n`| Select-Object -ExpandProperty CounterSamples` takes the output of the `Get-Counter` cmdlet and selects the `CounterSamples` property. This property contains the actual performance counter data.\n\n`| Select-Object -ExpandProperty CookedValue` selects the `CookedValue` property from the `CounterSamples` object. The `CookedValue` represents the calculated value of the performance counter, which in this case is the percentage of committed bytes in use.\n\nBy assigning the result to the `$memoryUsage` variable, we retrieve the calculated value (in percentage) of the memory consumption and store it for further use in the script.\n\n---\n\nOK, now I have some great jumping off points to continue learning later. I know what to look up in the PowerShell documentation to learn more about certain properties and cmdlets.\n\n## Save The Date\n\nThe base version of the report is great. One issue is that each time the script is run, the file will be overwritten. To fix this, I adjust the script to construct a file path that includes the current time. This will generate unique files as long as they are created at least one second apart. That's close enough for me!\n\n```powershell\n$reportFolder = \"C:\\Reports\"\n$currentTime = Get-Date -Format \"yyyyMMdd_HHmmss\"\n$reportPath = Join-Path -Path $reportFolder -ChildPath \"System_Monitoring_Report_$currentTime.html\"\n```\n\nRunning the script:\n\n![Run the System Report](/run-pwsh-report.png)\n\nResult in default browser:\n\n![Example Report](/system-monitoring-report-sample.png)\n\nHere is how the simple report should look in your default browser. Sure, it's barebones, but sometimes that is exactly what is called for.\n\nWith the updates to the script to include the current date and time in the file path, this script serves as an efficient way to collect snapshots of system usage over time. More information could be added to the report, or you could always go look at Task Manager.\n\nThis script is more of a learning tool to identify what to learn next.\n\n## Convert To Bash\n\nSeeing ChatGPT whip this script out in seconds flat has been entertaining to say the least. Since I have a MacBook Air for personal use, I wanted to play some more with this simple script.\n\nLet's see how converting to Bash goes:\n\n```bash\n#!/bin/bash\n\nreport_folder=\"/Users/your_username/Reports\"\ncurrent_time=$(date +\"%Y%m%d_%H%M%S\")\nreport_path=\"$report_folder/System_Monitoring_Report_$current_time.html\"\n\ncpu_threshold=80 # Set the threshold percentage for high CPU usage\nmemory_threshold=90 # Set the threshold percentage for high memory consumption\ndisk_threshold=80 # Set the threshold percentage for high disk usage\n\n# Get current CPU usage percentage\ncpu_usage=$(ps -A -o %cpu | awk '{s+=$1} END {print s}')\n\n# Get current memory consumption percentage\nmemory_usage=$(ps -A -o %mem | awk '{s+=$1} END {print s}')\n\n# Get disk space usage percentage for the root directory\ndisk_usage=$(df -h / | tail -1 | awk '{print $5}' | tr -d '%')\n\n# Check if CPU, memory, or disk usage exceeds the thresholds\nhigh_cpu_usage=$(awk -v cpu_usage=$cpu_usage -v cpu_threshold=$cpu_threshold 'BEGIN {print (cpu_usage > cpu_threshold)}')\nhigh_memory_usage=$(awk -v memory_usage=$memory_usage -v memory_threshold=$memory_threshold 'BEGIN {print (memory_usage > memory_threshold)}')\nhigh_disk_usage=$(awk -v disk_usage=$disk_usage -v disk_threshold=$disk_threshold 'BEGIN {print (disk_usage > disk_threshold)}')\n\n# Generate the HTML report\nhtml_report=$(cat <<EOF\n<!DOCTYPE html>\n<html>\n<head>\n    <title>System Monitoring Report</title>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n        }\n        .header {\n            background-color: #333;\n            color: #fff;\n            padding: 10px;\n        }\n        .content {\n            padding: 20px;\n        }\n        .high-usage {\n            color: red;\n            font-weight: bold;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"header\">\n        <h1>System Monitoring Report</h1>\n    </div>\n    <div class=\"content\">\n        <h2>CPU Usage: <span class=\"$high_cpu_usage\">$(if [ \"$high_cpu_usage\" -eq 1 ]; then echo \"<span class='high-usage'>$cpu_usage%</span>\"; else echo \"$cpu_usage%\"; fi)</span></h2>\n        <h2>Memory Consumption: <span class=\"$high_memory_usage\">$(if [ \"$high_memory_usage\" -eq 1 ]; then echo \"<span class='high-usage'>$memory_usage%</span>\"; else echo \"$memory_usage%\"; fi)</span></h2>\n        <h2>Disk Space Usage (root): <span class=\"$high_disk_usage\">$(if [ \"$high_disk_usage\" -eq 1 ]; then echo \"<span class='high-usage'>$disk_usage%</span>\"; else echo \"$disk_usage%\"; fi)</span></h2>\n    </div>\n</body>\n</html>\nEOF\n)\n\n# Save the report to a file\necho \"$html_report\" > \"$report_path\"\n\n# Open the report in the default web browser\nopen \"$report_path\"\n\n```\n\nThere was some explanation provided about the nature of the changes.\n\n_ChatGPT Response:_\n\nPlease note the following adjustments made for macOS compatibility:\n\n- The `report_folder` variable is updated with the desired folder path where reports should be saved.\n- The `current_time` variable uses the `date` command with the appropriate format specifier.\n- The `cpu_usage` value is obtained using `ps` command with the `-o %cpu` option.\n- The `memory_usage` value is obtained using `ps` command with the `-o %mem` option.\n- The `disk_usage` value is obtained using `df` command with the `/` directory and filtering for the root file system.\n- The `high_cpu_usage`, `high_memory_usage`, and `high_disk_usage` variables are assigned using `awk` for comparison.\n- The `html_report` variable uses a Bash \"here document\" (`<<EOF`) to store the HTML content.\n- The report is opened using the `open` command, which opens the file in the default web browser.\n\nRemember to replace `\"your_username\"` in the `report_folder` variable with your actual macOS username. Additionally, ensure that the script is executable (`chmod +x script.sh`) before running it.\n\nThe first pass was running fine once I entered my username. What did not look correct was seeing CPU usage over 200%. I asked if that value could be revised, but then it showed 0%. Then I looked up a command to see CPU usage on Mac and asked ChatGPT to use that.\n\nSimilarly, for disk usage, that command was working fine, but it was pointing to the root instead of /System/Volumes/Data.\n\nMaking both of these adjustments leaves me with values that make more sense. Memory usage looks high, however when checked against Activity Monitor the numbers seem accurate. I will have to learn about 'Memory Pressure' since that still looks low. I'd rather my system be using as much memory as possible to let the CPU breathe, and that seems to be happening.\n\nHere are the updated assignments:\n\n```bash\n# --snip--\n\n# CHANGED\n# Get current CPU usage percentage\ncpu_usage=$(top -l 2 -n 0 | grep -E \"^CPU\" | tail -1 | awk '{print $3}')\n\n# --memory_usage is unchanged for now--\n\n# CHANGED\n# Get disk space usage percentage for the root directory\ndisk_usage=$(df -h /System/Volumes/Data | tail -1 | awk '{print $5}' | tr -d '%')\n\n# --snip--\n```\n\n## Shell Scripting Summation\n\nGenerating these scripts with the help of ChatGPT was a lot of fun. I'd like to think I learned a few things along the way. I still have tons to learn about operating systems and scripting languages.\n\nBefore running these scripts I made sure to understand the gist of what was happening, stopping to look up new properties and methods I had not yet encountered. I enjoy this approach to learning at times more than attempting to read documentation from start to finish.\n";
						const data = {draft:false,title:"Shell Scripting With ChatGPT",date:new Date(1688169600000),author:"Matthew Davis",description:"Learn how to use ChatGPT to quickly generate PowerShell and Bash scripts that will help every developer.",category:"Learning"};
						const _internal = {
							type: 'content',
							filePath: "E:/code/astro/curved-chaos/src/content/blobs/shell-scripting-with-chatgpt.md",
							rawData: "\ntitle: Shell Scripting With ChatGPT\nslug: gpt-shell-scripting\ndraft: false\ndescription: Learn how to use ChatGPT to quickly generate PowerShell and Bash scripts that will help every developer.\ndate: 2023-07-01\nauthor: Matthew Davis\ncategory: Learning",
						};

export { _internal, body, collection, data, id, slug };

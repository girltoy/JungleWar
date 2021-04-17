# modzyClient.blockUntilJobComplete

Block the script execution until the job status is "COMPLETED", "TIMEDOUT" or "CANCELED". By default it polls the job details every two seconds, but this interval can be changed using the
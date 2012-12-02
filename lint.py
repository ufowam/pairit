import subprocess
import json
import sys

#print content

p = subprocess.Popen(["pyflakes", sys.argv[1]], stdout=subprocess.PIPE)

out, err = p.communicate()

data = {}


out = out.split("\n")[:-1]

#print sys.argv[1]

for error in out:
	
	error = error.split(":")
	line = error[1]
	#print line
	errormsg = error[2]
	data[line] = errormsg.strip()

print json.dumps(data)
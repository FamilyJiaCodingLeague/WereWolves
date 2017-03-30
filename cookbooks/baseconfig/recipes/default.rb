# Update apt packages
execute 'apt_update' do
	command 'sudo apt-get update'
	command 'sudo apt-get install -y curl'
end

# install node & npm
package 'nodejs'
package 'npm'
execute 'link node to nodejs' do
	command 'sudo ln -s `which nodejs` /usr/local/bin/node'
	creates '/usr/local/bin/node'
end


# install node dependencies
execute 'node depedencies' do
	command 'cd /webroot && sudo npm install'
end

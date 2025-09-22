# simple_web_server.py
from socket import *

# Choose a port > 1024 (avoid 80 since system may already use it)
server_port = 8080
server_socket = socket(AF_INET, SOCK_STREAM)

# Bind the server to the localhost and chosen port
server_socket.bind(('', server_port))
server_socket.listen(1)
print(f"Web server is running on port {server_port}...")

while True:
    # Accept connection
    connection_socket, addr = server_socket.accept()
    try:
        # Receive request
        message = connection_socket.recv(1024).decode()
        print("Received request:", message)

        # Parse the filename
        filename = message.split()[1]  
        with open(filename[1:], 'rb') as f:  # remove '/' from request
            outputdata = f.read()

        # Send HTTP response header
        header = "HTTP/1.1 200 OK\r\n\r\n"
        connection_socket.send(header.encode())

        # Send the content of the requested file
        connection_socket.send(outputdata)

    except FileNotFoundError:
        # Send 404 header
        header = "HTTP/1.1 404 Not Found\r\n\r\n"
        connection_socket.send(header.encode())
        # Send simple HTML error page
        connection_socket.send(b"<html><body><h1>404 Not Found</h1></body></html>")

    connection_socket.close()

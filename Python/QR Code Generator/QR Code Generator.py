import pyqrcode
from pyqrcode import QRCode
import png
import time

content = input("Enter the String : ")
time.sleep(1)
print(f"Encrypting : {content}")
qrcode = QRCode(content)
time.sleep(1)
filename = input("Give a file name for your QR Code : ")
print("Your QR Code is Created ")

# You can change the scale to increase or decrease the size of QR Code...
qrcode.png(f"{filename}.png", scale = 7)
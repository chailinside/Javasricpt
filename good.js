			var d = new Date()
			var time = d.getHours()
			if(time>=6&&time<=9)
			{
				document.write("<font color='#ffffff'>Selamat Pagi Sobat</font>")
			}
			else if(time>=10&&time<=11)
			{
				document.write("<font color='#ffffff'>Selamat Pagi Menjelang Siang</font>")
			}
			else if(time==12)
			{
				document.write("<font color='#ffffff'>Selamat Siang Sobat</font>")
			}
			else if(time>=13&&time<=15)
			{
				document.write("<font color='#ffffff'>Selamat Siang Menjelang Sore</font>")
			}
			else if(time==16)
			{
				document.write("<font color='#ffffff'>Selamat Sore Sobat</font>")
			}
			else if(time>=17&&time<=18)
			{
				document.write("<font color='#ffffff'>Selamat Petang Sobat</font>")
			}
			else if(time>=19&&time<=21)
			{
				document.write("<font color='#ffffff'>Selamat Malam Sobat</font>")
			}
			else if(time>=22&&time<=23)
			{
				document.write("<font color='#ffffff'>Selamat Beristirahat Sobat</font>")
			}
			else if(time==00)
			{
				document.write("<font color='#ffffff'>Waktu Tengah Malam</font>")
			}
			else if(time>=1&&time<=3)
			{
				document.write("<font color='#ffffff'>Selamat Dini Hari</font>")
			}
			else if(time>=4&&time<=5)
			{
				document.write("<font color='#ffffff'>Waktunya Subuh</font>")
			}
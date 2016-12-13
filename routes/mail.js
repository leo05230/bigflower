var i_csMailServer	= require('nodemailer') ;


var csMailServer = i_csMailServer.createTransport();

csMailServer.sendMail({
	from: 'example@mandice.com' ,

	to:'leo05230@gmail.com',

	subject:'FLOWER TEST',

	text:'gogog flower' 

},function(err,msg)
{
	if(err)
		console.log(err) ;
	else
		console.log(msg) ;

}) ;
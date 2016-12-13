var strSql	= require("mssql") ;

var csConn	= new strSql.Connection({
	user: 'sa',
	password: 'Ff68320601',
	server:'localhost',
	database:'HOME-FLOWER'
	}, function(err){
		if(err)
		{
			console.log(err);
			return
		}
		
		var csSqlConnamd	= new strSql.Request(csConn) ;
		csSqlConnamd.query("SELECT * FROM [HOME-FLOWER].[dbo].[FLOWER_MESSAGE]",function(ERR,MSG){
			if(err)
			{
				console.log(err) ;
				return
			}
			else
			{
				console.log(MSG[0].TITLE);
				return
			}
		}) 
	});


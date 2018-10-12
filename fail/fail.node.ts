namespace $ {

	process.on( 'uncaughtException' , ( error : any )=> {
		if( 'then' in error || $mol_fail_catched.has( error ) ) return
		console.error( error )
		$mol_fail_catched.add( error )
	} )

	process.on( 'unhandledRejection' , ( reason : any )=> {
		if( 'then' in reason || $mol_fail_catched.has( reason ) ) return
		console.error( reason )
		$mol_fail_catched.add( reason )
	} )

}

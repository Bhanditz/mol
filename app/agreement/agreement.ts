/// Поставщик
class $mol_app_agreement_provider extends $mol_model {
	id() : string { return void 0 }
	name() : string { return void 0 }
}

/// Группа закупок
class $mol_app_agreement_supply_group extends $mol_model {
	id() : string { return void 0 }
	name() : string { return void 0 }
	manager() : $mol_app_agreement_person { return void 0 }
}

/// Закупочный дивизион
class $mol_app_agreement_supply_division extends $mol_model {
	id() : string { return void 0 }
	name() : string { return void 0 }
}

/// Способ оплаты
class $mol_app_agreement_payMethod extends $mol_model {
	id() : string { return void 0 }
	name() : string { return void 0 }
}

/// Дебитор
class $mol_app_agreement_debitor extends $mol_model {
	id() : string { return void 0 }
	name() : string { return void 0 }
}

/// Продукт
class $mol_app_agreement_supply_position extends $mol_model {
	name() : string { return void 0 }
	supplyMoment() : $jin.time.moment_class { return void 0 }
	division() : $mol_app_agreement_supply_division { return void 0 }
	stock() : $mol_app_agreement_stock { return void 0 }
	price() : $mol_unit_money { return void 0 }
	quantity() : number { return void 0 }
	cost() : $mol_unit_money { return void 0 }
}

/// Работник
class $mol_app_agreement_person extends $mol_model {
	id() : string { return void 0 }
	name() : string { return void 0 }
}

/// Договор
class $mol_app_agreement_contract extends $mol_model {
	id() : string { return void 0 }
}

/// Балансовая единица
class $mol_app_agreement_ballanceUnit extends $mol_model {
	id() : string { return void 0 }
	name() : string { return void 0 }
}

/// Закупочная организация
class $mol_app_agreement_consumer extends $mol_model {
	id() : string { return void 0 }
	name() : string { return void 0 }
}

/// Склад для доставки
class $mol_app_agreement_stock extends $mol_model {
	id() : string { return void 0 }
	name() : string { return void 0 }
}

/// Заявка на закупку
class $mol_app_agreement_supply extends $mol_model {
	id() : string { return void 0 }
	provider() : $mol_app_agreement_provider { return void 0 }
	consumer() : $mol_app_agreement_consumer { return void 0 }
	group() : $mol_app_agreement_supply_group { return void 0 }
	status() : $mol_app_agreement_supply_status { return void 0 }
	ballanceUnit() : $mol_app_agreement_ballanceUnit { return void 0 }
	manager() : $mol_app_agreement_person { return void 0 }
	contract() : $mol_app_agreement_contract { return void 0 }
	payMethod() : $mol_app_agreement_payMethod { return void 0 }
	debitor() : $mol_app_agreement_debitor { return void 0 }
	positions() : $mol_app_agreement_supply_position[] { return void 0 }
	cost() : $mol_unit_money { return void 0 }
}

/// Статус заявки на закупку
enum $mol_app_agreement_supply_status {
	pending = 'pending' as any ,
	approved = 'approved' as any ,
	rejected = 'rejected' as any ,
}

/// Демонстрационный бизнес домен
class $mol_app_agreement_domain_mock extends $mol_model {
	
	@ $mol_prop()
	supplies() {
		return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split( '' ).map( id => this.supply( id ) )
	}
	
	@ $mol_prop()
	supply( id : string ) {var x = Math.round( Math.random() * 1000000 )
		return new $mol_app_agreement_supply().setup( obj => {
			obj.id = $mol_const( id )
			obj.cost = $mol_const( new $mol_unit_money_rur( x ) )
			obj.status = $mol_const( $mol_app_agreement_supply_status[ [ 'pending' , 'approved' , 'rejected' ][ Math.floor( Math.random() * 3 ) ] ] )
			obj.provider = $mol_const( this.provider( Math.random().toString( 16 ).substring( 2 ) ) )
			obj.consumer = $mol_const( this.consumer( Math.random().toString( 16 ).substring( 2 ) ) )
			obj.group = $mol_const( this.supplyGroup( Math.random().toString( 16 ).substring( 2 ) ) )
			obj.contract = $mol_const( this.contract( Math.random().toString( 16 ).substring( 2 ) ) )
			obj.manager = $mol_const( this.person( Math.random().toString( 16 ).substring( 2 ) ) )
			obj.ballanceUnit = $mol_const( this.ballanceUnit( Math.random().toString( 16 ).substring( 2 ) ) )
			obj.payMethod = $mol_const( this.payMethod( Math.random().toString( 16 ).substring( 2 ) ) )
			obj.debitor = $mol_const( this.debitor( Math.random().toString( 16 ).substring( 2 ) ) )
			obj.positions = $mol_const( 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split( '' ).map( id2 => this.position({ supply : id , position : id2 }) ) )
		} )
	}
	
	@ $mol_prop()
	provider( id : string ) {
		return new $mol_app_agreement_provider().setup( obj => {
			obj.id = $mol_const( id )
			obj.name = $mol_const([ 'ACME Human Resources' , 'ACME' , 'ACME Mobility' ][ Math.floor( Math.random() * 3 ) ])
		} )
	}

	@ $mol_prop()
	consumer( id : string ) {
		return new $mol_app_agreement_consumer().setup( obj => {
			obj.id = $mol_const( id )
			obj.name = $mol_const([ 'ACME Product Placement' , 'ACME Direct' , 'ACME Learning' ][ Math.floor( Math.random() * 3 ) ])
		} )
	}

	@ $mol_prop()
	ballanceUnit( id : string ) {
		return new $mol_app_agreement_ballanceUnit().setup( obj => {
			obj.id = $mol_const( id )
			obj.name = $mol_const([ 'ACME Enterprise' , 'ACME Customer' , 'ACME Inside' ][ Math.floor( Math.random() * 3 ) ])
		} )
	}

	@ $mol_prop()
	division( id : string ) {
		return new $mol_app_agreement_supply_division().setup( obj => {
			obj.id = $mol_const( id )
			obj.name = $mol_const([ 'Food' , 'Tech' , 'Humans' ][ Math.floor( Math.random() * 3 ) ])
		} )
	}

	@ $mol_prop()
	supplyGroup( id : string ) {
		return new $mol_app_agreement_supply_group().setup( obj => {
			obj.id = $mol_const( id )
			obj.name = $mol_const([ 'Ivanov Group' , 'Petrov Group' , 'Sidorov Group' ][ Math.floor( Math.random() * 3 ) ])
		} )
	}

	@ $mol_prop()
	stock( id : string ) {
		return new $mol_app_agreement_stock().setup( obj => {
			obj.id = $mol_const( id )
			obj.name = $mol_const([ 'Riga#10' , 'Moscow#123' , 'Saint-Petersburg#42' ][ Math.floor( Math.random() * 3 ) ])
		} )
	}

	@ $mol_prop()
	person( id : string ) {
		return new $mol_app_agreement_person().setup( obj => {
			obj.id = $mol_const( id )
			obj.name = $mol_const([ 'Ivanov AB' , 'Petrov BC' , 'Sidorov CD' ][ Math.floor( Math.random() * 3 ) ])
		} )
	}
	
	@ $mol_prop()
	contract( id : string ) {
		return new $mol_app_agreement_person().setup( obj => {
			obj.id = $mol_const( id )
		} )
	}

	@ $mol_prop()
	payMethod( id : string ) {
		return new $mol_app_agreement_payMethod().setup( obj => {
			obj.id = $mol_const( id )
			obj.name = $mol_const([ 'Accounting' , 'Cash' ][ Math.floor( Math.random() * 2 ) ])
		} )
	}

	@ $mol_prop()
	debitor( id : string ) {
		return new $mol_app_agreement_payMethod().setup( obj => {
			obj.id = $mol_const( id )
			obj.name = $mol_const([ 'ACME Finance' , 'ACME Credit Systems' , 'ACME $' ][ Math.floor( Math.random() * 3 ) ])
		} )
	}

	@ $mol_prop()
	position( id : { supply : string , position : string } ) {
		return new $mol_app_agreement_supply_position().setup( obj => {
			obj.name = $mol_const([ 'Work Station, 4 cores, 16GB' , 'ZX Spectrum' , 'ACMEbook' ][ Math.floor( Math.random() * 3 ) ])
			obj.supplyMoment = $mol_const( $jin.time.moment().shift({ day : Math.round( Math.random() * 100 ) }) )
			obj.stock = $mol_const( this.stock( Math.random().toString( 16 ).substring( 2 ) ) )
			obj.division = $mol_const( this.division( Math.random().toString( 16 ).substring( 2 ) ) )
			obj.price = $mol_const( new $mol_unit_money_rur( Math.round( Math.random() * 2000000 ) ) )
			obj.quantity = $mol_const( Math.round( Math.random() * 30 ) )
			obj.cost = $mol_const( obj.price().mult( obj.quantity() ) )
		} )
	}

}
import Mirage from 'ember-cli-mirage';

export default function() {
    this.namespace = '/api/v1';

    this.get('/members/search', (schema, request)=>{

	let _term = request.queryParams['search[term]'];
	let mem = schema.members.findBy({ nationalId: _term });

	if(_term!='0921679346')
	    return {};
	else
	    return { "member": {"nationalId":1}};

    });
    
    //find all members
    this.post('members');
    this.post('auth', function(){
        return {
            "status": "success",
            "data": {
                "uid": "fabio.baazusrto@gmail.com",
                "id": 5,
                "email": "fabio.baazusrto@gmail.com",
                "provider": "email",
                "allow_password_change": false,
                "name": null,
                "nickname": null,
                "image": null,
                "created_at": "2020-04-17T03:59:52.000Z",
                "updated_at": "2020-04-17T03:59:53.000Z"
            }
        };
    });
    
    this.get('members', (schema)=>{

        return schema.members.all();
    });

    this.get('provinces', ()=>{

        return {"provinces":[
  {
    "id": 1,
    "name": "Pichincha"
  },
  {
    "id": 2,
    "name": "Guayas"
  },
  {
    "id": 3,
    "name": "Azuay"
  },
  {
    "id": 4,
    "name": "Esmeraldas"
  },
  {
    "id": 5,
    "name": "Manabí"
  },
  {
    "id": 6,
    "name": "Santa Elena"
  },
  {
    "id": 7,
    "name": "Tungurahua"
  },
  {
    "id": 8,
    "name": "Pastaza"
  },
  {
    "id": 9,
    "name": "Imbabura"
  },
  {
    "id": 10,
    "name": "Loja"
  },
  {
    "id": 11,
    "name": "Chimborazo"
  },
  {
    "id": 12,
    "name": "Orellana"
  },
  {
    "id": 13,
    "name": "Santo Domingo"
  },
  {
    "id": 14,
    "name": "El Oro"
  },
  {
    "id": 15,
    "name": "Napo"
  },
  {
    "id": 16,
    "name": "Cotopaxi"
  },
  {
    "id": 17,
    "name": "Bolivar"
  },
  {
    "id": 18,
    "name": "Galápagos"
  }
	]};

    });


    this.get('/api/v1/users/current', function(db, request){
        if(request.requestHeaders.Authorization === "Bearer PA$$WORD") {
            return { user: { id: 1, firstName: 'Chase', lastName: 'McCarthy' } };
        }else{
            return new Mirage.Response(401, {}, {});
        }
    });


    this.post('/auth/sign_in', function(db, request){

        var attrs = JSON.parse(request.requestBody)
        if(attrs.email === "user@email.com" && attrs.password === "secret") {

            let header = {
                "access-Token":"PA$$WORD",
                "token":"PA$$WORD",
                "uuid":attrs.email,                                
                "token-type":"bearer",
                "client": attrs.email,
                "fullname":"Long ff",
                "expiry": "1588125543"
            };

            let responser = {
                "data": {
                    "id": 1,
                    "email": "fabio.bazurto5@gmail.com",
                    "provider": "email",
                    "uid": "fabio.bazurto5@gmail.com",
                    "allow_password_change": false,
                    "name": null,
                    "nickname": null,
                    "image": null
                }
            };
            return new Mirage.Response(201, header, responser);            
        }else{
            var body = { errors: 'Email or password is invalid' };
            return new Mirage.Response(401, {}, body);
        }
    });

    this.passthrough()
    
}

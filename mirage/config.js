export default function() {
   this.namespace = '/api/v1'
    //find all members

    this.post('members');
    this.get('members', (schema)=>{

        return schema.members.all();
    });

    this.get('provinces', (schema)=>{

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

}

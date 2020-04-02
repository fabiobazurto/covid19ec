export default function() {
   this.namespace = '/api/v1'
    //find all members
    this.get('members', (schema)=>{

        return schema.members.all();
    });

}

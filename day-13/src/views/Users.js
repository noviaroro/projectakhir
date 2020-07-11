import React from 'react';
//class Users berisi form untuk pemesanan di resto dan context API


class Users extends React.Component{
    constructor(props){
      super(props);
      this.state={
        nama: '',
        nomeja:'',
        pesanan:[],
  
      }
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onPick = this.onPick.bind(this);
    }
  
    onSubmit(event) {
      event.preventDefault();
        //const response = await fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-03&sortBy=publishedAt&apiKey= 239c4e22accd4396a4584b87094e2f3a');
      const {nama, nomeja, pesanan}= this.state;
      alert (`Pesanan atas nama ${this.state.name} dengan nomer meja ${this.state.nomeja} berhasil` )

    }
  
    onChange(event){
      const {name,value} = event.target;
      this.setState({ [name]: value})
    }
    onPick(event){
      let pesanan = [...this.state.pesanan];
      let idx = pesanan.findIndex(elemen => event.target.value === elemen);
      if (idx > 0){
        pesanan = [...pesanan.slice(0, idx), ...pesanan.slice(idx + 1,pesanan.length)]
      }else if (idx === 0){
        pesanan = [pesanan.slice(idx + 1, pesanan.length)]
      }else{
        pesanan.push(event.target.value)
      }
      console.log(pesanan);
      this.setState({ pesanan});
    }
  
    render(){
      const{nama, nomeja, pesanan}= this.state;
  
      return(
        <form className="App-header">
          <label>
            Nama:
            <input name="nama" type="text" value={nama} onChange={this.onChange}/>
          </label><br/>
          <label>
              No Meja:
      <input name="nomeja" type="number" value={nomeja} onChange={this.onChange} /><br/>
            </label><br/>
            <label>
              Pesanan:
              <select multiple value={pesanan} onChange={this.onPick}>
                <option value="Surabi Oncom">Surabi Oncom</option>
                <option value="Surabi Manis">Surabi Manis</option>
                <option value="Peuyeum">Peuyeum</option>
              </select><br/>
            </label>
            <button type="submit">submit</button>
        </form>
      );
    }
  }  
  // form pesanan
export default Users;



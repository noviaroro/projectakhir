import React from 'react';
//About berisi Pengenalan Resto dan lifting state up suhu badan pegawai dengan konversi suhu celcius ke farenheit

class InputSuhu extends React.Component{
    _handleChange = (e) => {
      this.props.onChangeSuhu(e.target.value);
    }
    
      
    render(){
      const {suhulabel , suhu} = this.props;
      return(
        <>
        <label>
          {suhulabel === 'F'? 'Farenheit' : 'Celcius'}:
          <input type="number" value={suhu} onChange={this._handleChange}/>
        </label><br/>
        </>
      )
    }
  }
  // menampilkan suhu pegawai yang dapat dikonversi dari celcius ke farenheit atau sebaliknya
  class Suhu extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {
        c : 35,
        f : 95
      }
    }
  
    onSubmit =(e) =>{
      e.preventDefault();
      alert (`Status suhu pegawai resto yaitu${this.state.c} Celcius setara dengan ${this.state.f} Farenheit` )
    }
  
    onChangeC =(c) =>{
      let f = c * 1.8 +32;
      this.setState({c, f})
    }
    onChangeF =(f) =>{
      let c = f -32 * 0.55;
      this.setState({c, f})
    }
    render(){
        const {c, f} = this.state;
        
        return(
            <>
            <div className="App">
            <header className="App-header">
                About Resto :<br/>
                Resto Project Akhir menjual makanan dan minuman <br/>
                Khas Bandung, Jawa barat<br/>
                Dengan Alamat Setiabudi 194

            </header>
        </div>
          <form className="App App-header" onSubmit= {this.onSubmit}>
              Behubung dengan ketentuan COVID-19 
              <br/>Berikut Kami Tampilkan Konversi Suhu Pegawai dari Celcius Ke Farenheit: 
              <InputSuhu timelabel="c" suhu={c} onChangeSuhu={this.onChangeC} />
              <InputSuhu timelabel="f" suhu={f} onChangeSuhu={this.onChangeF} />
              <button type="submit">submit</button>
          </form>
          </>
        );
      }
    }
    //form yang menampilkan suhu
    export default Suhu;
    
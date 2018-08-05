import React, { Component } from 'react';
import './App.css';

class App extends Component {

    static lowerCaseWords = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
    static upperCaseWords = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
    static symbols = '° ! # $ % & / ( ) = ? ¡ | ¬ ¿ * [ { ] } + -';
    static numbers = '1 2 3 4 5 6 7 8 9 0';

    constructor(props){

        super(props)

        this.state = {
            passwordLength: 5,
            upperCaseWords: true,
            symbols: true,
            numbers: true,
            password: '',
        }
    }
    
    increaseCounter = () => {
        if(this.state.passwordLength < 20){
            this.setState(prevState => ({passwordLength: prevState.passwordLength + 1}));
        }
    }

    decreaseCounter = () => {
        if(this.state.passwordLength > 0){
            this.setState(prevState => ({passwordLength: prevState.passwordLength - 1}));
        }
    }

    toggleUpperCaseWords = () => {
        this.setState(prevState => ({ upperCaseWords: !prevState.upperCaseWords }))
    }

    toggleSymbols = () => {
        this.setState(prevState => ({ symbols: !prevState.symbols }))
    }

    toggleNumbers = () => {
        this.setState(prevState => ({ numbers: !prevState.numbers }))
    }

    generatePassword = () => {
        let wordsString = App.lowerCaseWords;
        if (this.state.upperCaseWords) {
            wordsString += App.upperCaseWords;
        }

        if (this.state.symbols) {
            wordsString += App.symbols;
        }

        if (this.state.numbers) {
            wordsString += App.numbers;
        }

        const wordsArray = wordsString.split(' ');
        let password = '';

        for (let i = 0; i < this.state.passwordLength; i++) {
            password += wordsArray[Math.floor(Math.random() * wordsArray.length)];
        }

        this.setState({ password });
    }

    render() {
        return (
            <div className="App">
                <h1>Generador de contraseña</h1>
                <section className = "mainContainer">
                    <div className = "row">
                        <div className = "row row-50">
                            <p>Longitud de la contraseña</p>
                        </div>
                        <div className = "row row-50">
                            <button className = "btn row-4" onClick = { this.decreaseCounter }>-</button>
                            <p className = "btn btn-password-length row-4">{ this.state.passwordLength }</p>
                            <button className = "btn row-4" onClick = { this.increaseCounter }>+</button>
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "row row-50">
                            <p>Mayúsculas</p>
                        </div>
                        <div className = "row row-50">
                            <button className = "btn" onClick = { this.toggleUpperCaseWords }>{ this.state.upperCaseWords ? 'Sí' : 'No' }</button>
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "row row-50">
                            <p>Símbolos</p>
                        </div>
                        <div className = "row row-50">
                            <button className = "btn" onClick = { this.toggleSymbols }>{ this.state.symbols ? 'Sí' : 'No' }</button>
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "row row-50">
                            <p>Números</p>
                        </div>
                        <div className = "row row-50" onClick = { this.toggleNumbers }>
                            <button className = "btn">{ this.state.numbers ? 'Sí' : 'No' }</button>
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "row row-50">
                            <button className = "btn" onClick = { this.generatePassword }>Generar contraseña</button>
                        </div>
                        <div className = "row row-50">
                            <p className = "p-password">{ this.state.password }</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;

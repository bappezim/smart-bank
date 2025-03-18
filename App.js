import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,  TextInput , Button, } from 'react-native';

export default function App() {
 const [peso, setpeso] =useState('');
 //falta pegar a altura
 const [imc, setImc] = useState(null);
 const [classificado, setclassificado] = useState(' ');
 
 function calcucularIMC(){
  const pesonum =parsefloat(peso);
  const alturaNum = parsefloat(altura) / 100;
  if (!pesonum || !alturaNum ){
    alert('por favor, insira valores validos!');
    return;
  }
 }
}


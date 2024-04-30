import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'
import { styles2 } from './styles2'
import { styles3 } from './styles3'
import { styles4 } from './styles4'

export default function App() {
  // paginas
  const [loginPage, setLoginPage] = useState('true');
  const [homePage, setHomePage] = useState('false');
  const [registerPage, setRegisterPage] = useState('false');
  const [forgotPage, setForgotPage] = useState('false');

  const [email, setEmail] = useState('');
  const [emailField, setEmailField] = useState('');
  const [cpfField, setCpfField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [email2Field, setEmail2Field] = useState('');
  const [cepField, setCepField] = useState('');
  const [contatoField, setContatoField] = useState('');
  const [novaSenhaField, setNovaSenhaField] = useState('');
  const [confirmeSenhaField, setConfirmeSenhaField] = useState('');
  //const [setCpf, setCpfField] = useState('');

  const handleLoginEvent = () => {
    {
      setLoginPage('false')
      setHomePage('true')
    }
  }

  const handleRegisterEvent = () => {
    setLoginPage('false')
    setRegisterPage('true')
  }

  const handleForgotEvent = () => {
    setLoginPage('false')
    setForgotPage('true')
  }

  const handleLogoutEvent = () => {
    setLoginPage('true')
    setHomePage('false')
    setRegisterPage('false')
    setForgotPage('false')
  }

  return (
    <ScrollView style={styles.scrollview}>
    {loginPage == 'true' &&
        <>
      <View style={styles.container}>
        
          <Image style={styles.logo} source={require('./assets/icons8-tooth-100.png')}/>
          <Text style={styles.sorridents}>SORRIDENTS</Text>
          <Text style={styles.h1}>AGENDE SUA CONSULTA</Text>
          <Text style={styles.h2}>Bem vindo! Digite seus dados abaixo.</Text>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.inputField} placeholder='Digite seu email'
            value={emailField}
            onChangeText={text => setEmailField(text)}
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput style={styles.inputField} placeholder='*********' secureTextEntry
            value={passwordField}
            onChangeText={text => setPasswordField(text)}
          />
        </View>

        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgotEvent}>
            <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Button title='ENTRAR' color='#000080' onPress={handleLoginEvent}/>
        </TouchableOpacity>

        <View style={styles.signUpArea}>
          <TouchableOpacity onPress={handleRegisterEvent}>
            <Text style={styles.signUpText}>Você não tem conta?</Text>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      <TouchableOpacity>

        <View>
          <Image style={styles.face} source={require('./assets/icons8-facebook-48.png')}/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View>
          <Image style={styles.google} source={require('./assets/icons8-google-logo-48.png')}/>
        </View>
      </TouchableOpacity>

      </View>
      
    </>
    }

    {homePage == 'true' &&
        <>
        <View style={styles.aditionals}>
          <TouchableOpacity style={styles2.forgotBtnArea} onPress={handleLogoutEvent}>
            <Image style={styles2.forgotBtnText} source={require('./assets/icons8-desfazer-50.png')}/>
          </TouchableOpacity>
        </View>
          <View style={styles2.entrarBotao}>
            <Image style={styles2.perfilSegEntrar} source={require('./assets/icons8-user-30.png')} />
            <Text style={styles2.logado}>Voê está logado</Text>
            <TouchableOpacity style={styles2.botaoProximo}>
            <Text style={styles2.proximo}>PRÓXIMO</Text>
            </TouchableOpacity>
          </View>
        </>
    }

    {registerPage == 'true' &&
        <>
        
        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleLogoutEvent}>
            <Image style={styles3.voltarBtnText} source={require('./assets/icons8-desfazer-50.png')}/>
          </TouchableOpacity>

          <Image style={styles3.logoDente} source={require('./assets/icons8-tooth-100.png')}/>
          <Text style={styles3.sorridents2}>SORRIDENTS</Text>

          <Text style={styles3.cadrastese}>CADASTRE-SE</Text>
            <View style={styles.inputArea}>
            <Text style={styles3.inputEmail2}>Email</Text>
            <TextInput style={styles3.inputEmail22} placeholder='Digite seu email'
              value={email2Field}
              onChangeText={text => setEmail2Field(text)}
            />
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput style={styles.inputField} placeholder='*********' secureTextEntry
              value={passwordField}
              onChangeText={text => setPasswordField(text)}
            />
          </View>

          <View style={styles.inputArea}>
            <Text style={styles3.inputCpff}>CPF</Text>
            <TextInput style={styles3.inputCpf} placeholder='Digite seu CPF'
              value={cpfField}
              onChangeText={text => setCpfField(text)}
            />
          </View>

          <View style={styles.inputArea}>
            <Text style={styles3.inputCep}>CEP</Text>
            <TextInput style={styles3.inputCpf} placeholder='Digite seu CEP'
              value={cepField}
              onChangeText={text => setCepField(text)}
            />
          </View>

          <View style={styles.inputArea}>
            <Text style={styles3.inputContato2}>Contato</Text>
            <TextInput style={styles3.inputContato} placeholder='(00) 0000.0000'
              value={contatoField}
              onChangeText={text => setContatoField(text)}
            />
          </View>

          
        <TouchableOpacity style={styles3.botaoCadastrar}>
            <Text style={styles3.cadastro}>CADASTRAR</Text>
        </TouchableOpacity>
      
        </View>
        </>
    }

    {forgotPage == 'true' &&
        <>
        
        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleLogoutEvent}>
            <Image style={styles2.forgotBtnText} source={require('./assets/icons8-desfazer-50.png')}/>
          </TouchableOpacity>
            <Image style={styles3.logoDente} source={require('./assets/icons8-tooth-100.png')}/>
          <Text style={styles3.sorridents2}>SORRIDENTS</Text>

          <View style={styles4.inputArea}>
            <Text style={styles4.inputNovaSenha}>Nova senha</Text>
            <TextInput style={styles4.inputNovaSenha2} placeholder= '*********' secureTextEntry
              value={novaSenhaField}
              onChangeText={text => setNovaSenhaField(text)}
            />
          </View>

          <View style={styles4.inputArea}>
            <Text style={styles4.inputConfirmeSenha}>Confirme sua nova senha</Text>
            <TextInput style={styles4.inputConfirmeSenha2} placeholder= '*********' secureTextEntry
              value={confirmeSenhaField}
              onChangeText={text => setConfirmeSenhaField(text)}
            />
          </View>

        <TouchableOpacity style={styles4.botaoConfirmar}>
            <Text style={styles4.confirmar}>CONFIRMAR</Text>
        </TouchableOpacity>
        </View>
        </>
    }
    </ScrollView>
  )
}


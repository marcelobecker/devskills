import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions
} from "react-native";
import * as Progress from "react-native-progress";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

console.disableYellowBox = true;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      indeterminate: true,

      startedGame: 0,
      step: 0,
      question: 0,

      stepName: "",
      stepDescription: "",

      isCorrect: 0,
      questText: "",

      steps: [
        {
          step: 1,
          stepName: "Lógica Básica",
          stepDescription:
            "Nesta fase você irá testar os conhecimentos básicos de lógica"
        },
        {
          step: 2,
          stepName: "Lógica Avançada",
          stepDescription:
            "Nesta fase você irá testar os conhecimentos mais avançados de lógica"
        },
        {
          step: 3,
          stepName: "Algorítmos Básicos",
          stepDescription:
            "Nesta fase você irá testar seus conhecimentos básicos de Algorítmos"
        },
        {
          step: 4,
          stepName: "Algorítmos Avançados",
          stepDescription:
            "Para realizar esta fase você deverá ter conhecimentos de <Portugol>"
        },
        {
          step: 5,
          stepName: "Programação - Iniciante",
          stepDescription:
            "Para esta fase você vai precisar ter conhecimentos básicos de JavaScript"
        }
      ],
      questions: [
        { step: 1, question: 1, isCorrect: 1, questText: "2 * 7 > 5 * 3" },
        { step: 1, question: 2, isCorrect: 1, questText: "10 + 15 = 18 + 7" },
        {
          step: 1,
          question: 3,
          isCorrect: 0,
          questText: "120 centímetros < 1,2 metros"
        },
        { step: 1, question: 4, isCorrect: 0, questText: "48 / 6 <> 2 * 4" },
        {
          step: 1,
          question: 5,
          isCorrect: 0,
          questText: "1 litro <> 1000 mililitros"
        },
        {
          step: 1,
          question: 6,
          isCorrect: 0,
          questText: "se 1 pizza possui 8 fatias, 32 fatias = 3 pizzas"
        },
        { step: 1, question: 7, isCorrect: 1, questText: "1,5 < ½" },
        { step: 1, question: 8, isCorrect: 0, questText: "3,5 > 7/2" },
        {
          step: 1,
          question: 9,
          isCorrect: 0,
          questText: "(80 / 2) * 2 = ((100 - 70) * 2) + 30"
        },
        {
          step: 1,
          question: 10,
          isCorrect: 0,
          questText: "270 <> ((3 * 9) * 10)"
        },

        {
          step: 3,
          question: 1,
          isCorrect: 0,
          questText:
            "Passos para trocar o pneu furado de um carro \n1o Passo: Retire o pneu reserva do porta-malas ou debaixo do veículo\n2o Passo: Procure e deixe a mão a chave de rodas e o macaco\n3o Passo: Retire o pneu furado e guarde-o no lugar onde tirou o pneu reserva\n4o Passo: Com a chave de rodas afrouxe os parafusos do pneu furado\n5o Passo: Levante o veículo com o macaco no lado do pneu furado\n6o Passo: Retire todos os parafusos do pneu furado\n7o Passo: Com a chave de rodas, coloque os parafusos no pneu reserva sem apertar muito\n8o Passo: Baixe o macaco e retire-o debaixo do veículo\n9o Passo: Com a chave de rodas, aperte bem os parafusos do pneu reserva\n10o Passo: Guarde o macaco e a chave reserva\n11o Passo: Coloque o pneu reserva na noda onde estava o pneu furado\n"
        },
        {
          step: 3,
          question: 2,
          isCorrect: 1,
          questText:
            "Passos para escovar os dentes\n1o Passo: Pegue o creme dental e tire a tampa\n2o Passo: Pegue a escova de dentes com a outra mão\n3o Passo: Aperte o tubo do creme dental até sair um pouco e coloque sobre as cerdas da escova\n4o Passo: Deixe o creme dental na pia ou prateleira\n5o Passo: Abra o registro de agua e molhe um pouco sobre o creme dental que vc passou na escova\n6o Passo: Leve a escova até a boca e escove os dentes \n7o Passo: Enxague a boca com agua para retirar o excesso da pasta\n8o Passo: Lave a escova de dentes e a guarde\n9o Passo: Enxugue as mãos e o rosto\n"
        },
        {
          step: 3,
          question: 3,
          isCorrect: 0,
          questText:
            "Passos para tomar banho\n1o Passo: Passe o sabonete e o shampoo\n2o Passo: Tire a roupa\n3o Passo: Entre no chuveiro\n4o Passo: Abra o registro de agua\n5o Passo: Enxague o corpo e o cabelo\n6o Passo: Vestir a roupa\n7o Passo: Feche o registro de agua \n8o Passo: Seque-se com uma toalha\n9o Passo: Saia do chuveiro\n"
        },
        {
          step: 3,
          question: 4,
          isCorrect: 1,
          questText:
            "Passos para tomar agua\n1o Passo: Pegue o copo em uma das mãos\n2o Passo: Pegue a garrafa de água na outra mão\n3o Passo: Despeje a agua da garrafa no copo até encher o copo\n4o Passo: Leve o copo a boca e tome a agua\n"
        },
        {
          step: 3,
          question: 5,
          isCorrect: 1,
          questText:
            "Passos para alimentar um peixe de aquário\n1o Passo: Pegue o frasco com a ração de peixe\n2o Passo: Feche a tampa do aquário\n3o Passo: Despeje a quantidade diária de ração sobre a água do aquário\n4o Passo: Abra a tampa de cima do aquário\n5o Passo: Guarde o frasco da ração\n"
        },

        {
          step: 4,
          question: 1,
          isCorrect: 0,
          questText:
            "Algoritmo que recebe dois números e exiba o resultado da sua soma. \ninicio\nvariavel real primeira_nota, segunda_nota, x \nescrever 'Digite a primeira nota' \nler primeira_nota \nescrever 'Digite a segunda nota' \nler segunda_nota \nx<-primeira_nota+terceira_nota \nescrever 'A soma é:' \nescrever x \nfim \n"
        },
        {
          step: 4,
          question: 2,
          isCorrect: 1,
          questText:
            "Algoritmo para determinar o consumo médio de um automóvel sendo fornecida a distância total percorrida pelo automóvel e o total de combustível gasto\ninicio\nvariavel real km, litros, consumo\nescrever 'Informe quantos km o veículo rodou: '\nler km\nescrever 'Informe a quantidade de combustível gasto:'\nler litros\nconsumo<-km/litros\nescrever ' A autonomia de ', consumo,  '  km por litro de combustivel'\nescrever consumo\nfim\n"
        }
      ]
    };
  }

  animate() {
    let progress = 1;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress -= 0.01;
        if (progress < 0) {
          progress = 0;
        }
        this.setState({ progress });
      }, 100);
    }, 1500);
  }

  // getStorage = async state => {
  //   try {
  //     await AsyncStorage.getItem("devskills").then(value => {
  //       let s = JSON.parse(value);
  //       if (s === null) {
  //         s = state;
  //       }
  //     });
  //   } catch (e) {
  //     var s = state;
  //   }
  //   return s;
  // };

  // setStorage = async state => {
  //   try {
  //     const s = JSON.stringify(state);
  //     await AsyncStorage.setItem("devskills", s);
  //   } catch (e) {}
  // };

  componentDidMount() {
    //    const s = getState();
    //this.animate();
  }

  nextStep() {
    this.animate();
  }

  retValStep(step) {
    const { stepName, stepDescription } = this.state.steps.find(
      s => (s.step = step)
    );
    this.setState({ stepName, stepDescription });
  }

  retValQuestion(step, question) {
    const { isCorrect, questText } = this.state.questions.find(
      q => q.step === step && q.question === question
    );
    this.setState({ isCorrect, questText });
  }

  chooseAnswer(resp) {
    if (resp !== this.state.isCorrect) {
    }
  }

  render() {
    let body =
      this.state.startedGame === 0 ? (
        <View style={{ marginTop: 50 }}>
          <TouchableHighlight
            onPress={() => {
              this.setState({ startedGame: 1 });
              this.animate();
            }}
            underlayColor="#006934"
            style={styles.actionButton}
          >
            <Text style={styles.actionButtonText}>Iniciar o Jogo</Text>
          </TouchableHighlight>
        </View>
      ) : (
        <View>
          <View style={styles.step}>
            <Text style={{ fontSize: 18, color: "#bd9" }}>
              {this.state.steps[this.state.step - 1].step.toString() +
                " - " +
                this.state.steps[this.state.step - 1].stepName}
            </Text>
          </View>
          <View style={styles.questBox}>
            <ScrollView
              styles={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ color: "#000", fontSize: 18 }}>
                this.state.questions[step - 1].
              </Text>
            </ScrollView>
          </View>
          <View
            style={{
              width: 300,
              marginTop: 20,
              marginBottom: 20,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() => {
                  alert("Correto");
                }}
              >
                <Icon name="thumb-up" size={35} color="green" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  alert("Errado");
                }}
              >
                <Icon name="thumb-down" size={35} color="red" />
              </TouchableOpacity>
            </View>
          </View>
          <Progress.Bar
            height={12}
            style={styles.progress}
            progress={this.state.progress}
            indeterminate={this.state.indeterminate}
          />

          <View style={{ marginTop: 50 }}>
            <TouchableHighlight
              onPress={() => {
                this.setState({ startedGame: 1, step: 1, question: 1 });
                this.retValStep(1);
                this.retValQuestion(1, 1);
                this.animate();
              }}
              underlayColor="#006934"
              style={styles.actionButton}
            >
              <Text style={styles.actionButtonText}>Reiniciar a fase</Text>
            </TouchableHighlight>
          </View>
        </View>
      );

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{ fontSize: 26, color: "#bd0" }}>DevSkills</Text>

          {body}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00f",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    width: 300,
    height: 60,
    marginTop: 2,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  step: {
    width: 300,
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  questBox: {
    width: 300,
    height: 500,
    backgroundColor: "#ffc"
  },
  actionButton: {
    width: "90%",
    height: 40,
    backgroundColor: "transparent",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#bd0",
    justifyContent: "center",
    alignItems: "center"
  },
  actionButtonText: {
    color: "#bd0",
    fontSize: 18,
    padding: 5
  },
  progress: {
    width: Dimensions.get("window").width * (70 / 100)
  }
});

//Teste de Conversão Json <-> Dart
import 'dart:convert'; //nativa -> não precisa baixar para o pubspec

void main(){
  String UsuarioJson = '''{
                            "id": "1ab2",
                            "user": "usuario1",
                            "nome": "Pedro",
                            "idade": 25,
                            "cadastrado": true,
                      }''';
  Map<String,dynamic> usuario = json.decode(UsuarioJson);
  print(usuario["idade"]);
  usuario["idade"] = 26;
  UsuarioJson = json.encode(usuario);
  print(UsuarioJson);

  
}


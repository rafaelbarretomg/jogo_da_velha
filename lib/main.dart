import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Jogo da Velha',
      home: GamePage(),
    );
  }
}

class GamePage extends StatefulWidget {
  const GamePage({Key? key}) : super(key: key);

  @override
  State<GamePage> createState() => _GamePageState();
}

class _GamePageState extends State<GamePage> {
  List<String> _board = List<String>.filled(9, '');
  String _turn = 'X';
  String _winner = '';
    List<int> _winningLine = [];

  void _makeMove(int index) {
    if (_winner.isNotEmpty || _board[index].isNotEmpty) {
      return;
    }
    setState(() {
      _board[index] = _turn;
      if (_checkWin()) {
        _winner = _turn;
        _findWinningLine();
      } else if (!_board.any((element) => element.isEmpty)) {
        _winner = 'Empate';
      } else {
        _turn = _turn == 'X' ? 'O' : 'X';
      }
    });
  }
  void _findWinningLine() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (var combination in winningCombinations) {
      if (_board[combination[0]] == _board[combination[1]] &&
          _board[combination[1]] == _board[combination[2]] &&
          _board[combination[0]].isNotEmpty) {
        _winningLine = combination;
        break;
      }
    }
  }

  bool _checkWin() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (var combination in winningCombinations) {
      if (_board[combination[0]] == _board[combination[1]] &&
          _board[combination[1]] == _board[combination[2]] &&
          _board[combination[0]].isNotEmpty) {
        return true;
      }
    }
    return false;
  }

  void _restartGame() {
    setState(() {
      _board = List<String>.filled(9, '');
      _turn = 'X';
      _winner = '';
      _winningLine = [];
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Jogo da Velha'),
      ),
      body: Center(
        child: Column(
          children: [
            Expanded(
              child: GridView.builder(
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 3,
                ),
                itemCount: 9,
                itemBuilder: (context, index) {
                  return GestureDetector(
                    onTap: () => _makeMove(index),
                    child: Container(
                      margin: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        border: Border.all(
                          color: _winningLine.contains(index) ? Colors.red : Colors.black,
                        width: _winningLine.contains(index) ? 5 : 1,
                        ),
                      ),
                      child: Center(
                        child: Text(
                          _board[index],
                          style: const TextStyle(fontSize: 95),
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
            Text(
              _winner.isEmpty
                  ? 'Vez de $_turn'
                  : _winner == 'Empate'
                      ? 'Empate!'
                      : 'Vencedor: $_winner',
              style: const TextStyle(fontSize: 50),
            ),
            Padding(
              padding: const EdgeInsets.only(bottom:30.0),
              child: ElevatedButton(
                onPressed: _restartGame,
                child: const Text('Reiniciar', style: TextStyle(fontSize: 30)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

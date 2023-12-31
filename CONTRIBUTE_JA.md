# Contributeの仕方

## リポジトリのクローン

```bash
git clone
```

## Node.jsのバージョン

Node.jsのバージョン管理にはVoltaを使用することを推奨します。このプロジェクトはVoltaを採用しているため、クローン後、ディレクトリに移動してnode -vを実行すると、プロジェクトで使用されているバージョンに自動的に切り替わります。

Voltaの公式サイト: https://volta.sh/

## ブランチ名

ブランチ名は以下の通りです
フォーマットは以下の通りです
`${prefix}/変更内容`

- feat: 新機能
- fix: バグ修正
- docs: ドキュメント
- style: フォーマット、セミコロンの欠落など、コードの変更はありません
- refactor: リファクタリング本番コード
- test: テストの追加、テストのリファクタリング。本番コードの変更はありません
- chore: ビルドタスク、パッケージマネージャーの設定の更新など、本番コードの変更はありません
- perf: パフォーマンスを向上させるコード変更
- ci: CI構成ファイルとスクリプトの変更。本番コードの変更はありません

## コミットメッセージ

コミットメッセージには、以下の絵文字を適切に使用してください。
フォーマットは以下の通りです
`絵文字 変更内容`

- feat: ✨
- fix: 🐛
- docs: 📝
- style: 💄
- refactor: ♻️
- test: ✅
- chore: 🤖
- perf: ⚡️
- ci: 🎡
- Github Actions: 💻

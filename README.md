# React TSX Template

自分用最小構成Typescript+Reactテンプレート

## 利用方法

### 準備

```bash
$ npm install
```

### 開発進行

1. 以下のコマンド実行

```bash
$ npm run dev
```

2. [http://localhost:3535](http://localhost:3535)を開く

### リリース

```bash
$ npm run prod
```

### テスト

```bash
$ npm run test
```

### カバレッジ

```bash
$ npm run test:coverage
```

### 構文チェック

```bash
$ npm run lint
```

### 構文修正

```bash
$ npm run lint:fix
```

### 出力ファイルの削除

- 全て
```bash
$ npm run clean
```

- リリースファイル

```bash
$ npm run clean:webpack
```

- カバレッジファイル

```bash
$ npm run clean:coverage
```

## 注意点

- tslintについて

2020/10の現在ではtslintが非推奨になりeslintとeslintのtypescript用プラグインが使われるようになった。
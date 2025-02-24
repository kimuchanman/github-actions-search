# github-actions-search

Language: [英語](./README.md) | 日本語

GitHub の Actions タブにワークフローと検索機能と個人単位のピン留め機能を追加する Chrome 拡張機能です。

![github-actions-search](https://github.com/user-attachments/assets/d543c3a2-0c43-4c06-af73-4cfe02e1f04a)

この Chrome 拡張機能は多数の workflow を持つリポジトリにおける辛さを解消します。

1. ワークフローの検索機能が提供されていない。表示も10件ずつの追加ロードなので目的のワークフローを見つけるまでに時間がかかる
2. 検索性が低いのでピン留めしたくなるが、ピンはチーム共有かつ5件が上限なので限りがある

## 機能

- ワークフローファイルをインクリメンタルサーチする UI を GitHub の Actions タブページに追加します
- 個人単位の制限のないピン留め機能を提供します

## インストール

[リリースページ](https://github.com/d-kimuson/github-actions-search/releases/latest) よりダウンロードしてインストールしてください。
Chrome ストアへの公開は現状未定です。

## 仕組み

拡張機能はページナビゲーションを監視して actions のページであれば検索用の拡張ボタンを UI に追加します。

拡張機能はリポジトリの `.github/workflows/` 以下のファイルリストをユーザーのセッションから取得することで、ワークフローの一覧を取得します。

ファイルリストを情報源としていることから、本家のワークフローの一覧と仕様が若干異なることに注意してください。

Ex. Dependabot Alerts など workflow ファイルが存在しないものが表示されない

## Contribute

歓迎します。

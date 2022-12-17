# YAML to JSON tools

# Installation

**CLI executable**
```
npm install -g yaml-to-json
```

# Examples

- $ yaml-to-json input.yml update.json
- $ yaml-to-json input.yml update.json output.json

# 引数オプション

- 第一引数（必須）：変換元YAMLフィアル
- 第二引数（必須）：第一引数で指定されたYAMLをJSONに変換後、第二引数で指定したファイルに追記する
- 第三引数（オプション）：第一引数で指定されたYAMLをJSONに変換後、第二引数で指定したファイルには追記せず、第三引数に指定されたファイルに書き出す（主に確認用）

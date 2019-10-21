# git-emoji

## 安装

```
npm install husky
npm install git-emoji
```

## 使用

```
"husky": {
    "hooks": {
        "commit-msg": "npx git-emoji"
    }
},
```

## 效果

```
    git commit -m 'test: message'
    git log：
    test: ✅ message
```

```
    git commit -m 'add: readme; mod: package name'
    git log：
    add: ➕ readme;
    mod: 〰️ package name
```

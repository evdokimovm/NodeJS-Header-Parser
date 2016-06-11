# Node.js Header Parser

Get user's ip-address, language and software

Usage example:

```javascript
fetch('http://localhost:8080/')
	.then((res) => {
		res.json().then((data) => {
			console.log(data);
		});
	})
	.catch((err) => {
		console.log(err);
	});
```

Output object:

```json
{
	"ip-address": "xxx.xxx.xxx.xxx",
	"language": "ru",
	"software": "Windows NT 6.2; WOW64"
}
```

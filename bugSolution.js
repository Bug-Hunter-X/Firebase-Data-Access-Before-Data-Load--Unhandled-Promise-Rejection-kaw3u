The corrected code uses `await` to ensure the promise resolves before accessing the data:

```javascript
async function getData() {
  try {
    const snapshot = await db.collection('myCollection').doc('myDoc').get();
    if (snapshot.exists) {
      const data = snapshot.data();
      console.log('Data:', data.someField);
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}

getData();
```
Alternatively, you can use `.then()` for promise handling:

```javascript
db.collection('myCollection').doc('myDoc').get().then(snapshot => {
  if (snapshot.exists) {
    const data = snapshot.data();
    console.log('Data:', data.someField);
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});
```
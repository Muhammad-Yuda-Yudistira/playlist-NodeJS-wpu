const { MongoClient } = require('mongodb')
const ObjectID = require('mongodb').ObjectID

const uri = 'mongodb://127.0.0.1:27017'
const dbName = 'wpu'

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

client.connect((error, client) => {
    if (error) {
        return console.log('Koneksi gagal!')
    }

    // pilih database
    const db = client.db(dbName)

    // // menambahkan satu data ke collection mahasiswa
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: 'Dendi',
    //         email: 'dendi@gmail.com'
    //     }, 
    //     (error, result) => {
    //         if (error) {
    //             return console.log('Gagal menambahkan satu data!')
    //         }

    //         console.log(result)
    // })

    // // menambahkan banyak data ke collection mahasiswa
    // db.collection('mahasiswa').insertMany(
    //     [
    //         {
    //             nama: 'Dendi',
    //             email: 'dendi@yahoo.com'
    //         },
    //         {
    //             nama: 'riga',
    //             email: 'riga@gmail.com'
    //         }
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log('Gagal menambahkan banyak data!')
    //         }

    //         console.log(result)
    // })



    // // menampilkan semua data dari collection mahasiswa
    // console.log(db.collection('mahasiswa').find().toArray((error, result) => {
    //     console.log(result)
    // }))

    //  // menampilkan data berdasarkan kriteria dari collection mahasiswa
    //  console.log(
    //      db
    //      .collection('mahasiswa')
    //      .find({ _id: ObjectId("6298a6d0e9fb5a3faceaac6b") })
    //      .toArray((error, result) => {
    //         console.log(result)
    // }))



    // // mengubah data berdasarkan id dari collection mahasiswa
    // db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectID("6298b860c5e2c73d60cd2cd9")
    //     },
    //     {
    //         $set: {
    //                 email: 'riga@yahoo.com'
    //         }
    //     },
    //     (error, result) => {
    //         console.log(result)
    //     }
    // )

    // // updatePromise
    // // .then((result) => {
    // //     console.log(result)
    // // })
    // // .catch((error) => {
    // //     console.log('Gagal mengubah data!')
    // // })

    // // mengubah data lebih dari satu 
    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: 'Dendi'
    //     },
    //     {
    //         $set: {
    //             nama: 'Dendi doank'
    //         }
    //     }
    // )



    // // mendelete satu data berdasarkan id
    // db.collection('mahasiswa').deleteOne(
    //     {
    //         _id: ObjectID("6298b860c5e2c73d60cd2cd9")
    //     }
    // )
    // .then((result) => {
    //     console.log(result)
    // })
    // .catch((error) => {
    //     console.log(error)
    // })

    // mendelete lebih dari satu data berdasarkan nama
    db.collection('mahasiswa').deleteMany(
        {
            nama: 'Dendi doank'
        }
    )
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })

})
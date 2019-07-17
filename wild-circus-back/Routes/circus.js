const express = require('express');
const router = express.Router();
const db = require('../db/db');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));


//--------------En tant qu'utilisateur je veux créer un numéro----------------//

router.post('/numeros', (req, res) => {
    const formData = req.body;
    db.query('INSERT INTO numeros SET ?', formData, (err, results) => {
        if (err) {
            res.status(500).json("Erreur lors de la création d'un numéro");
            console.log(err);
            return
        }
        if (!results) {
            res.status(400).json();
            return;
        }
        db.query('SELECT * FROM numeros WHERE id = ?', results.insertId, (err, results) => {
            if (err) {
                res.status(500).json();
                return;
            }
            res.status(201).json(results[0]);
        });
    });
});

//--------------En tant qu'utilisateur je veux créer un artist----------------//

router.post('/artists', (req, res) => {
    const formData = req.body;
    db.query('INSERT INTO artists SET ?', formData, (err, results) => {
        if (err) {
            res.status(500).json("Erreur lors de la création d'un artist");
            console.log(err);
            return
        }
        if (!results) {
            res.status(400).json();
            return;
        }
        db.query('SELECT * FROM artists WHERE id = ?', results.insertId, (err, results) => {
            if (err) {
                res.status(500).json();
                return;
            }
            res.status(201).json(results[0]);
        });
    });
});




//--------------En tant qu'utilisateur je veux consulter un numero en renseignant son id----------------//


router.get('/numeros/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM numeros WHERE id=?', id, (err, results) => {
        if (err) {
            res.status(500).json('Erreur lors de la récupération du numéro');
            return;
        }
        if (!results.length) {
            res.status(404).json('Pas de numéro correspondant')
            return;
        } else {
            res.status(200).json(results);
        }
    }

    )
})

//--------------en tant qu'utilisateur, je veux créer et affecter une réseravtion à un numéro.----------------//

router.post('/reservations', (req, res) => {
    const formData = req.body;
    db.query('INSERT INTO reservations set ?', formData, (err, results) => {
        if (err) {
            res.status(500).json('Erreur lors de la création de la reservation');
            console.log(err);
            return;
        } if (!results) {
            res.status(400).json();
        } else {
            db.query('SELECT * FROM reservations WHERE id = ?', results.insertId, (err, results) => {
                if (err) {
                    res.status(500).json();
                } else {
                    res.status(201).json(results[0]);
                }
            })
        }
    })
})

//--------------en tant qu'utilisateur, je veux lister toutes les réservations d'un numéro..----------------//


router.get('/reservations/numeros/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM reservations WHERE playlist_id = ?', id, (err, results) => {
        if (err) {
            res.status(500).json('Erreur lors de la récupération des reservations');
        } if (!results.length) {
            res.status(404).json();
        } else {
            res.status(200).json(results);
        }
    })
});

//--------------en tant qu'utilisateur, je veux lister touts les artists d'un numéro..----------------//


router.get('/artists/numeros/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM artists WHERE numero_id = ?', id, (err, results) => {
        if (err) {
            res.status(500).json('Erreur lors de la récupération des reservations');
            console.log(err);
        } if (!results.length) {
            res.status(404).json();
        } else {
            res.status(200).json(results);
        }
    })
});

//--------------en tant qu'utilisateur, je veux pouvoir supprimer un numéro...----------------//

router.delete('/numeros/:id', (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM numeros WHERE id =? ", id, err => {
        if (err) {
            res.status(500).json("Erreur lors de la suppression");
            console.log(err);
        }
        else {
            res.status(204).json()
        }
    })
})

//--------------en tant qu'utilisateur, je veux pouvoir supprimer un numéro...----------------//

router.delete('/reservations/:id', (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM reservations WHERE id =? ", id, err => {
        if (err) {
            res.status(500).json("Erreur lors de la suppression");
            console.log(err);
        }
        else {
            res.status(204).json()
        }
    })
})

//--------------en tant qu'utilisateur, je veux pouvoir modifier un numero. ---------------//


router.put('/numeros/:id', (req, res) => {
    const id = req.params.id;
    const formData = req.body;
    db.query('UPDATE numeros SET ? WHERE id = ?', [formData, id], err => {
       if (err) {
          res.status(500).json("Erreur lors de la modification d'un numero");
          console.log(err)
          return;
       }
       db.query('SELECT * FROM numeros WHERE id = ?', id, (err, results) => {
          if (err) {
             res.status(500).json();
             console.log(err)
             return;
          }
          res.status(200).json(results[0]);
       });
    });
  });

  //--------------en tant qu'utilisateur, je veux pouvoir modifier une réservation. ---------------//


router.put('/reservations/:id', (req, res) => {
    const id = req.params.id;
    const formData = req.body;
    db.query('UPDATE reservations SET ? WHERE id = ?', [formData, id], err => {
       if (err) {
          res.status(500).json("Erreur lors de la modification d'un numero");
          console.log(err)
          return;
       }
       db.query('SELECT * FROM reservations WHERE id = ?', id, (err, results) => {
          if (err) {
             res.status(500).json();
             console.log(err)
             return;
          }
          res.status(200).json(results[0]);
       });
    });
  });

   //-------------- en tant qu'utilisateur, je veux modifier un artiste d'un numero.---------------//


   router.put('/artists/:id', (req, res) => {
    const id = req.params.id;
    const formData = req.body;
    db.query('UPDATE artists SET ? WHERE id = ?', [formData, id], err => {
       if (err) {
          res.status(500).json("Erreur lors de la modification d'un artists");
          return;
       }
       db.query('SELECT * FROM artists WHERE id = ?', id, (err, results) => {
          if (err) {
             res.status(500).json();
             return;
          }
          res.status(200).json(results[0]);
       });
    });
  });

  //-------------- en tant qu'utilisateur, je veux supprimer un artists d'un numéro---------------//


router.delete('/artists/:id', (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM artists WHERE id =? ", id, err => {
        if (err) {
            res.status(500).json("Erreur lors de la suppression");
            console.log(err);
        }
        else {
            res.status(204).json()
        }
    })
})

//Consulter tous les numeros
router.get('/numeros' , (req, res) => {
    db.query('SELECT * FROM numeros', (err, results) => {
        if(err){
            res.status(404).json('Erreur lors de la récupération des numeros');
        } else {
            res.status(200).json(results);
        }
    })
});

//Consulter tous les artists
router.get('/artists' , (req, res) => {
    db.query('SELECT * FROM artists', (err, results) => {
        if(err){
            res.status(404).json('Erreur lors de la récupération des artists');
        } else {
            res.status(200).json(results);
        }
    })
});

//Consulter toutes les reservations
router.get('/reservations' , (req, res) => {
    db.query('SELECT * FROM reservations', (err, results) => {
        if(err){
            res.status(404).json('Erreur lors de la récupération des reservations');
        } else {
            res.status(200).json(results);
        }
    })
});


module.exports = router;

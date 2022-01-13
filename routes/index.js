var express = require('express');
var router = express.Router();

var authRouter = require('./authRoutes');
var userRouter = require('./userRoutes');
var kelasRouter = require('./kelasRoutes');
var modulRouter = require('./modulRoutes');
var progres_siswaRouter = require('./progres_siswaRoutes');
var tugas_terkumpulRouter = require('./tugas_terkumpulRoutes');
var eventRouter = require('./eventRoutes');

var profileRouter = require('./profileRoutes');

var userController = require('../controllers/userController.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Seola' });
});

router.use('/auth', authRouter);

router.use('/user', userRouter);
router.use('/kelas', kelasRouter);
router.use('/modul', modulRouter);
router.use('/progres', progres_siswaRouter);
router.use('/tugas', tugas_terkumpulRouter);
router.use('/event', eventRouter);

router.use('/profile', profileRouter);

router.get('/leaderboard', userController.listLeaderboard);

module.exports = router;
//imports
import express from 'express';
import bodyparser from 'body-parser';

//routes
import voertuigtypeRoutes from './routes/voertuigtype.js';
import voertuigRoutes from './routes/voertuig.js';
import tankkaartbrandstofRoutes from './routes/tankkaartbrandstof.js';
import tankkaartRoutes from './routes/tankkaart.js';
import rijbewijstyperijbewijsRoutes from './routes/rijbewijstyperijbewijs.js';
import rijbewijstypeRoutes from './routes/rijbewijstype.js';
import rijbewijsRoutes from './routes/rijbewijs.js';
import brandstofvoertuigRoutes from './routes/brandstofvoertuig.js';
import bestuurderRoutes from './routes/bestuurder.js';
import homeRoutes from './routes/home.js';

//constants
const PORT = 5000;

//app
const app = express();
app.use(bodyparser.json());

app.use('/voertuigtype', voertuigtypeRoutes);
app.use('/voertuig', voertuigRoutes);
app.use('/tankkaartbrandstof', tankkaartbrandstofRoutes);
app.use('/tankkaart', tankkaartRoutes);
app.use('/rijbewijstyperijbewijs', rijbewijstyperijbewijsRoutes);
app.use('/rijbewijstype', rijbewijstypeRoutes);
app.use('/rijbewijs', rijbewijsRoutes);
app.use('/brandstofvoertuig', brandstofvoertuigRoutes);
app.use('/bestuurder', bestuurderRoutes);
app.use('/', homeRoutes);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
import Router from 'express-promise-router';

import handleAuthentication from 'Requests/authentication/google/handleAuthentication';

const router = Router();
router.post('/google', handleAuthentication);

export default router;

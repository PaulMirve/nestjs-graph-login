import * as jwt from 'jsonwebtoken';

export const generateJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, 'th1sisMY5ecr7k3Y', {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                reject(`The token can't be generated`);
            } else {
                resolve(token);
            }
        });
    });
}
import { group } from 'console';
import user from '../usermodel.js';
import group from '../groupmodel.js'
class userAPI {
    model = user;
    createNewUser = (req, res) => {
        user.exists({userName: userNameI}, function (err, out) {
            if (err){
                console.log(err);
                return res.sendStatus(403);
            } else {
                if (!out){
                    const createNew = new user({
                        userName: userNameI,
                        email: emailI,
                        role: ['User']
                    });
                    createNew.save(function (err) {
                        if (err) return handleError(err);
                        console.log("Created New User" + userNameI);
                        const token = userNameI;
                        res.status(200).json({ token });
                    });
                } else {
                    console.log("A user attempted to duplicate UserName: " + userNameI);
                    return res.sendStatus(403);
                }
            }
        });
    }
}

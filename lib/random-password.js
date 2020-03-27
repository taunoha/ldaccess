module.exports = {
    generate: function(length) {
        const pass = [];
        const alphabet = "abcdefghijklmnopqrstuwxyz";
        const max = alphabet.length - 1;
        const min = 0;

        for (let i = 0; i < 6; i++) {
            let n = Math.floor(Math.random()*(max-min+1)+min);
            pass.push(alphabet.substr(n, 1));
        }

        return pass.join('');
    }
};

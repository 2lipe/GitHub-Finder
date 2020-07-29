import dotenv from 'dotenv';
import showProfile from './modules/showProfile';
import showRepos from './modules/showRepos';

dotenv.config();

(function() {
  const search = document.querySelector('#search');

  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;

  const count = 7;
  const sort = 'created: asc';
    
  const url = 'https://api.github.com/users';

  async function getUser(user) {
    try {
      const userPage = `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`;
      const userRepos = `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=
        ${client_id}&client_secret=${client_secret}`;

      const profileResponse = await fetch(userPage);
      const profile = await profileResponse.json();

      const reposResponse = await fetch(userRepos);
      const repos = await reposResponse.json()

      return { profile, repos };

    } catch(err) {
      console.log(err);
    }

  };

  search.addEventListener('keypress', e => {
    const user = e.target.value;
    if (user.length > 0) {
      getUser(user)
        .then(res => {
          showProfile(res.profile);
          showRepos(res.repos);
        });
    }

  });

})();

function showRepos(repos) {
  const repositorios = document.querySelector('#repos');
  
  console.log(repos);
    
  let output = '';
    
  repos.forEach(repo => {
    output += `<div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6"><a href="${repo.html_url}" target="_black">${repo.name}</a></div>
          <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-success">Watches: ${repo.watchers_count}</span>
            <span class="badge badge-warning">Forks: ${repo.forks_count}</span>
          </div>
        </div>
        </div>`
    });
    repositorios.innerHTML = output;
};

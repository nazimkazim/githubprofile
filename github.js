class GitHub {
    constructor() {
        this.client_id = '35afaf5da682a9aed5d1';
        this.client_secret = '589d5b376e7c32589297025b5aa15d0c16f60ab2';
        this.repos_count = 4;
        this.repos_sort = 'created:asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}
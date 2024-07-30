<script>
    // The URL to your Discord server
    const discordUrl = "https://discord.com/invite/ZzactUJ6tx";

    // Function to redirect to Discord
    function redirectToDiscord() {
        window.location.href = discordUrl;
    }
</script>

<section
    class="flex flex-col items-center justify-center h-96 bg-gray-100 pb-5"
>
    <div class="text-center">
        <h1 class="text-5xl text-gray-800 mb-4">Join Our Discord Server!</h1>
        <p class="text-lg text-gray-600 mb-4">
            Connect with us and be a part of our awesome community.
        </p>
        <button
            type="button"
            on:click={redirectToDiscord}
            class="mt-10 py-2 px-4 bg-black hover:bg-indigo-700 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
        >
            Join now
        </button>
    </div>
</section>

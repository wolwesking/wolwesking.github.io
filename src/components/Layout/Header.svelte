<script>
    let menuOpen = false;

    function openMenu() {
        menuOpen = true;
    }

    function closeMenu() {
        menuOpen = false;
    }
</script>

<header class="bg-white" id="home">
    <!-- Desktop navigation -->
    <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
    >
        <div class="flex lg:flex-1">
            <a href="#home" class="-m-1.5 p-1.5">
                <span class="font-semibold text-lg">Patrik Takacs</span>
            </a>
        </div>

        <div class="hidden lg:flex lg:gap-x-12">
            <a
                href="#home"
                class="text-sm font-semibold leading-6 text-gray-900 hover:underline"
                >Home</a
            >
            <a
                href="#home-services"
                class="text-sm font-semibold leading-6 text-gray-900 hover:underline"
                >Services</a
            >
            <a
                href="https://discord.com/invite/ZzactUJ6tx"
                class="text-sm font-semibold leading-6 text-gray-900 hover:underline"
                >Contact</a
            >
        </div>

        <!-- Mobile menu toggle button -->
        <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
            on:click={openMenu}
        >
            <span class="sr-only">Open menu</span>
            <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
        </button>
    </nav>

    <!-- Mobile menu, show/hide based on menuOpen state -->
    <div
        class="fixed inset-0 bg-white z-50 overflow-y-auto lg:hidden menu"
        class:menu-visible={menuOpen}
    >
        <div class="flex justify-between items-center px-6 py-4">
            <!-- Logo or brand -->
            <a href="#home" class="-m-1.5 p-1.5">
                <span class="sr-only">Patrik Takacs</span>
                <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                />
            </a>
            <!-- Close button -->
            <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
                on:click={closeMenu}
            >
                <span class="sr-only">Close menu</span>
                <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>

        <!-- Mobile menu  -->
        <!-- Other menu items -->
        <a
            href="#home"
            class="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >Home</a
        >
        <a
            href="#home-services"
            class="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >Services</a
        >
        <a
            href="https://discord.com/invite/ZzactUJ6tx"
            class="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >Contact</a
        >
    </div>
</header>

<style>
    /* Ensure the mobile menu covers the entire screen */
    .menu {
        transition: transform 0.3s ease-in-out;
        transform: translateX(100%);
    }

    /* Display the mobile menu when menuOpen is true */
    .menu-visible {
        transform: translateX(0);
    }
</style>

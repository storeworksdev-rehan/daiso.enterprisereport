            {field(
              "CurrentPassword",
              "Current Password",
              "Enter your current password",
            )}
            {field(
              "NewPassword",
              "New Password",
              "Enter a new password",
              "Minimum 6 characters recommended.",
            )}
            {field(
              "ConfirmPassword",
              "Confirm New Password",
              "Re-enter your new password",
            )}

            {/* Feedback banner */}
            {message && (
              <div
                className={`flex items-start gap-3 rounded-lg px-4 py-3 text-sm border ${
                  status === "success"
                    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                    : "bg-[#fff0f7] border-[#f9c0e0] text-[#e60081]"
                }`}
              >
                {status === "success" ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                ) : (
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#e60081]" />
                )}
                <span>{message}</span>
              </div>
            )}

            <div className="flex justify-end pt-1">
              <button
                type="submit"
                onClick={() => {
                  if (!canSubmit) return;
                }}
                className={`btn btn-primary flex items-center gap-2 ${!canSubmit ? "disabled" : ""}`}
              >
                {status === "saving" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Saving…
                  </>
                ) : (
                  <>
                    <KeyRound className="h-4 w-4" /> Change Password
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          Your session will remain active after changing your password.
        </p>
      </div>
    </div>
  );
}
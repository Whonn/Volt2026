export default function Footer() {
  return (
    <footer className="bg-ink border-t border-line pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div>
            <p className="font-display text-3xl text-bone mb-4">
              VOLT<span className="text-volt">.</span>
            </p>
            <p className="text-mute text-sm leading-relaxed max-w-xs">
              Strength &amp; conditioning for people who train like it
              matters.
            </p>
          </div>

          <div>
            <p className="readout mb-5">Visit</p>
            <p className="text-mute text-sm leading-relaxed">
              412 Foundry Street
              <br />
              Unit 2, Industrial District
              <br />
              Mon–Fri 5AM–11PM
              <br />
              Sat–Sun 7AM–9PM
            </p>
          </div>

          <div>
            <p className="readout mb-5">Contact</p>
            <p className="text-mute text-sm leading-relaxed">
              hello@voltclub.example
              <br />
              (555) 014-2200
            </p>
          </div>

          <div>
            <p className="readout mb-5">Follow</p>
            <div className="flex flex-col gap-2 text-mute text-sm">
              <a href="#" className="hover:text-volt transition-colors w-fit">
                Instagram
              </a>
              <a href="#" className="hover:text-volt transition-colors w-fit">
                TikTok
              </a>
              <a href="#" className="hover:text-volt transition-colors w-fit">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-line font-mono text-xs text-mute">
          <p>&copy; {new Date().getFullYear()} VOLT Athletic Club. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-volt transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-volt transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

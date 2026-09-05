/**
 * Fort Myers Field Guide: the flagship checklist becomes a semantic, printable
 * HTML tool with large native controls, saved progress, and the verified PDF.
 */
import { useEffect, useMemo, useState } from "react";
import { Download, Printer, RotateCcw } from "lucide-react";
import { track } from "@vercel/analytics";
import { CHECKLIST_PDF_URL } from "@/components/SignupForm";
import { PageMeta } from "@/components/PageMeta";
import { SiteShell } from "@/components/SiteShell";

type Check = { title: string; detail: string };
type Room = { name: string; checks: Check[] };

const rooms: Room[] = [
  { name: "Entryway and outside", checks: [
    { title: "Walk the front steps and test every one.", detail: "Look for an uneven riser, soft tread, or chipped front edge that can catch a toe." },
    { title: "Put a handrail on both sides of the outside steps.", detail: "Rails should run the full length, sit 34 to 38 inches above the step edge, and not budge when pulled hard." },
    { title: "Check the walkway and driveway for cracks and lifted slabs.", detail: "Anything raised more than half an inch, or a gap that catches a cane tip, is a trip point. Patch it or mark it until fixed." },
    { title: "Stand outside after dark and look at the porch light.", detail: "If you cannot read an envelope at the door, it is too dim. Try an 800 to 1,100 lumen LED bulb." },
    { title: "Make the house numbers readable from the street.", detail: "Use numbers at least 4 inches tall, in a contrasting color, lit or reflective, and not blocked by a shrub." },
  ]},
  { name: "Bathroom", checks: [
    { title: "Install grab bars at the toilet and shower into solid structure.", detail: "Use studs or properly rated anchors—never plain drywall. Suction-cup bars are not grab bars." },
    { title: "Use a non-slip mat or adhesive strips on the tub or shower floor.", detail: "Replace strips when the grip wears smooth." },
    { title: "Check toilet height.", detail: "A raised seat or comfort-height toilet can reduce knee strain. Make sure any add-on seat is secured." },
    { title: "Use a shower chair or bench that actually fits the stall.", detail: "Measure first. Look for rubber tips and a stated weight rating." },
    { title: "Set the water heater at or below 120°F.", detail: "Check the tap with a kitchen thermometer before adjusting the heater." },
    { title: "Light the bathroom without hunting for a switch at 2 a.m.", detail: "Aim a plug-in motion night light at the floor, not at eye level." },
  ]},
  { name: "Stairs and hallways", checks: [
    { title: "Put handrails on both sides for the full flight.", detail: "Both rails should feel solid when leaned on and should not stop before the last step." },
    { title: "Fix loose runners, curled carpet edges, and lifted stair nosing.", detail: "Anything that shifts under a hand can shift under a foot. Tack it down properly or remove it." },
    { title: "Make sure there is a light switch at both ends of the stairs.", detail: "A licensed electrician can add a three-way switch; a battery motion light is a same-day bridge." },
    { title: "Clear the stairs and halls.", detail: "Remove baskets, shoes, and mail. Aim for a clear walking path at least 36 inches wide." },
    { title: "Mark the top and bottom step edges with contrasting non-slip tape.", detail: "A clear contrast makes the first and last step easier to see." },
  ]},
  { name: "Bedroom", checks: [
    { title: "Put a lamp within reach from the bed.", detail: "A touch lamp or cord switch avoids a dark walk to the wall." },
    { title: "Clear the path from the bed to the bathroom door.", detail: "Move hampers, pet beds, charger cords, and anything else that changes the walking line." },
    { title: "Add a low night light along that path.", detail: "Put one in the hallway and one near the bathroom doorway." },
    { title: "Set the bed height so both feet rest flat on the floor.", detail: "When seated at the edge, knees should be near a right angle with heels down." },
    { title: "Keep a phone or medical alert device within arm’s reach of the pillow.", detail: "A charger belongs on the nightstand, not across the room." },
  ]},
  { name: "Kitchen", checks: [
    { title: "Move everyday dishes, pans, and food between waist and shoulder height.", detail: "Daily items should not require overhead reaching or bending to the floor." },
    { title: "Stop using a step stool or chair for storage access.", detail: "If something needs a stool, move it. Fix the storage, not the balance." },
    { title: "Remove the throw rug in front of the sink or stove.", detail: "If cushioning is needed, use a low-profile anti-fatigue mat with a beveled edge that lies flat." },
    { title: "Check the fire extinguisher.", detail: "Keep a 5-pound ABC extinguisher near the kitchen door, not under the sink. Confirm the gauge is green and read the tag date." },
  ]},
  { name: "Whole house", checks: [
    { title: "Remove or secure every throw rug.", detail: "Use double-sided rug tape or a non-slip pad on all four corners if the rug stays." },
    { title: "Test every smoke and carbon-monoxide alarm and write the date on it.", detail: "Replace any unit older than 10 years and make the last test date easy to see." },
  ]},
];

const total = rooms.reduce((count, room) => count + room.checks.length, 0);

export default function Checklist() {
  const [done, setDone] = useState<number[]>(() => {
    try { return JSON.parse(localStorage.getItem("mhl-checklist") || "[]"); } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("mhl-checklist", JSON.stringify(done));
  }, [done]);

  const remaining = total - done.length;
  const numberedRooms = useMemo(() => {
    let number = 0;
    return rooms.map((room) => ({ ...room, checks: room.checks.map((check) => ({ ...check, number: ++number })) }));
  }, []);

  return (
    <SiteShell>
      <PageMeta
        title="Room-by-Room Home Safety Checklist | My Huckleberry Life"
        description="Use the accessible 27-point home safety checklist online, print it, or download the five-page PDF."
        path="/checklist"
      />
      <main id="main-content" className="checklist-page">
        <header className="checklist-header">
          <div className="shell checklist-head-grid">
            <div>
              <p className="eyebrow">Five rooms · 27 checks</p>
              <h1>The Room-by-Room Home Safety Checklist</h1>
              <p className="page-deck">
                Walk once. Mark what is already fine. Leave the rest blank. That gives you a
                short list instead of a vague worry.
              </p>
            </div>
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663816397374/AZcISvnQTjvtYnJa.jpg"
              width="1536"
              height="1024"
              alt="Cover of the printable Room-by-Room Home Safety Checklist."
            />
          </div>
        </header>

        <div className="checklist-toolbar" aria-label="Checklist progress and actions">
          <div className="shell toolbar-inner">
            <p aria-live="polite"><strong>{done.length}</strong> checked · <strong>{remaining}</strong> need attention</p>
            <div>
              <button className="toolbar-button" type="button" onClick={() => window.print()}><Printer aria-hidden="true" /> Print</button>
              <a className="toolbar-button" href={CHECKLIST_PDF_URL} download onClick={() => track("checklist_download", { location: "html-checklist" })}><Download aria-hidden="true" /> PDF</a>
              <button className="toolbar-button" type="button" onClick={() => setDone([])} disabled={done.length === 0}><RotateCcw aria-hidden="true" /> Reset</button>
            </div>
          </div>
        </div>

        <div className="reading-shell checklist-content">
          <section className="how-to">
            <h2>How to use this</h2>
            <p>
              Bring the person who lives here. It is their house. Walk from start to finish
              without stopping to repair anything. Check what is already fine. Leave anything
              that needs attention blank. Most homes take about twenty minutes.
            </p>
          </section>

          {numberedRooms.map((room) => (
            <section className="room-section" key={room.name}>
              <div className="room-heading">
                <h2>{room.name}</h2>
                <span>{room.checks.length} checks</span>
              </div>
              <ol>
                {room.checks.map((check) => {
                  const checked = done.includes(check.number);
                  return (
                    <li key={check.number} className={checked ? "is-done" : ""}>
                      <input
                        id={`check-${check.number}`}
                        type="checkbox"
                        checked={checked}
                        onChange={() => setDone((current) => checked ? current.filter((item) => item !== check.number) : [...current, check.number])}
                      />
                      <label htmlFor={`check-${check.number}`}>
                        <strong>{check.number}. {check.title}</strong>
                        <span>{check.detail}</span>
                      </label>
                    </li>
                  );
                })}
              </ol>
            </section>
          ))}

          <section className="next-steps">
            <h2>What to do first</h2>
            <ol>
              <li><strong>Light.</strong> Brighter bulbs, motion night lights, and switches at both ends of stairs. Roughly $20–$150.</li>
              <li><strong>Handrails and grab bars.</strong> The anchoring matters more than the bar. Roughly $30–$250 installed.</li>
              <li><strong>Rugs and clutter.</strong> Costs nothing, takes about an hour, and belongs at the top of the list.</li>
            </ol>
            <p>
              A medical alert device does not prevent a fall. It can shorten the time spent
              waiting for help. Tell a clinician about any fall; fewer than half of older adults
              who fall tell their doctor.
            </p>
          </section>

          <section className="source-list">
            <h2>Sources</h2>
            <ol>
              <li><a href="https://www.cdc.gov/falls/data-research/index.html" target="_blank" rel="noopener noreferrer">CDC, Older Adult Falls Data</a></li>
              <li><a href="https://www.cdc.gov/falls/data-research/facts-stats/index.html" target="_blank" rel="noopener noreferrer">CDC, Facts About Falls</a></li>
              <li><a href="https://www.cdc.gov/nchs/products/databriefs/db532.htm" target="_blank" rel="noopener noreferrer">NCHS Data Brief No. 532</a></li>
            </ol>
          </section>
        </div>
      </main>
    </SiteShell>
  );
}

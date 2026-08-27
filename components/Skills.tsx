import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section className="block" id="stack">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="eyebrow">
              <span className="n">04</span> Stack
            </span>
            <h2>The toolkit.</h2>
          </div>
          <p>
            Chosen for shipping production business software quickly — typed,
            server-rendered, and AI-ready.
          </p>
        </div>

        <div className="stackgrid">
          {skillGroups.map((group) => (
            <div
              className={`scat reveal${group.featured ? " full" : ""}`}
              key={group.category}
            >
              <div className="h">
                <b>{group.category}</b>
                <span className="no">
                  {group.note ?? String(group.skills.length).padStart(2, "0")}
                </span>
              </div>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
                {group.featured ? (
                  <li className="dim">+ any language, AI-assisted</li>
                ) : null}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

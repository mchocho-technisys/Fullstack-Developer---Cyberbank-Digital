import Button from "../components/Button";
import { GoBell, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return (
    <div className="flex justify-between">
      <div>
        <div>
          <Button
            onClick={() => {
              console.log("Click");
            }}
          >
            <GoBell />
            Plain
          </Button>
        </div>
        <div>
          <Button primary className="mb-5">
            <GoDatabase />
            Primary
          </Button>
        </div>
        <div>
          <Button secondary>Secondary</Button>
        </div>
        <div>
          <Button success>Success</Button>
        </div>
        <div>
          <Button warning>Warning</Button>
        </div>
        <div>
          <Button danger>Danger</Button>
        </div>
      </div>
      <div>
        <div>
          <Button rounded>Plain</Button>
        </div>
        <div>
          <Button primary rounded>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary rounded>
            Secondary
          </Button>
        </div>
        <div>
          <Button success rounded>
            Success
          </Button>
        </div>
        <div>
          <Button warning rounded>
            Warning
          </Button>
        </div>
        <div>
          <Button danger rounded>
            Danger
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button outline rounded>
            Plain
          </Button>
        </div>
        <div>
          <Button primary outline rounded>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary outline rounded>
            Secondary
          </Button>
        </div>
        <div>
          <Button success outline rounded>
            Success
          </Button>
        </div>
        <div>
          <Button warning outline rounded>
            Warning
          </Button>
        </div>
        <div>
          <Button danger outline rounded>
            Danger
          </Button>
        </div>
      </div>
      <div>
        <div>
          <Button outline>Plain</Button>
        </div>
        <div>
          <Button primary outline>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary outline>
            Secondary
          </Button>
        </div>
        <div>
          <Button success outline>
            Success
          </Button>
        </div>
        <div>
          <Button warning outline>
            Warning
          </Button>
        </div>
        <div>
          <Button danger outline>
            Danger
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;

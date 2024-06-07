package observer;

public class SubscriberA implements Observer {
    @Override
    public void update() {
        System.out.println("A : Publisher has been updated.");
    }
}

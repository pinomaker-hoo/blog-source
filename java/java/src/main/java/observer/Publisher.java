package observer;

import java.util.ArrayList;
import java.util.List;

class Publisher implements Subject {
    private List<Observer> observer = new ArrayList<>();

    @Override
    public void registerObserver(Observer observer) {
        this.observer.add(observer);
    }

    @Override
    public void removeObserver(Observer observer) {
        this.observer.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : this.observer) {
            observer.update();
        }
    }
}